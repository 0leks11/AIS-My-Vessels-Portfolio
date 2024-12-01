from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, schemas
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from sqlalchemy import func
from fastapi import Body

# Создание таблиц в базе данных (если их нет)
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Настройка CORS (если ваш фронтенд работает на другом домене или порте)
origins = [
    "http://localhost:3000",  # Замените на адрес вашего фронтенда
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Зависимость для получения сессии базы данных
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/vessels/", response_model=List[schemas.VesselData])
def get_all_vessels(db: Session = Depends(get_db)):
    # Получаем последние записи для каждого уникального MMSI
    subquery = (
        db.query(
            models.AISDynamic.mmsi,
            func.max(models.AISDynamic.time).label('latest_time')
        ).group_by(models.AISDynamic.mmsi).subquery()
    )

    vessel_data = (
        db.query(models.AISDynamic)
        .join(subquery, (models.AISDynamic.mmsi == subquery.c.mmsi) & (models.AISDynamic.time == subquery.c.latest_time))
        .all()
    )

    if vessel_data:
        return vessel_data
    else:
        raise HTTPException(status_code=404, detail="Данные не найдены")
    
@app.post("/vessels/list", response_model=List[schemas.VesselData])
def get_vessels_by_mmsi(mmsi_list: List[str] = Body(...), db: Session = Depends(get_db)):
    # Преобразуем список MMSI в числа, если mmsi хранится в базе данных как число
    mmsi_int_list = [int(mmsi) for mmsi in mmsi_list]

    subquery = (
        db.query(
            models.AISDynamic.mmsi,
            func.max(models.AISDynamic.time).label('latest_time')
        )
        .filter(models.AISDynamic.mmsi.in_(mmsi_int_list))
        .group_by(models.AISDynamic.mmsi)
        .subquery()
    )

    vessel_data = (
        db.query(models.AISDynamic)
        .join(
            subquery,
            (models.AISDynamic.mmsi == subquery.c.mmsi) &
            (models.AISDynamic.time == subquery.c.latest_time)
        )
        .all()
    )

    if vessel_data:
        return vessel_data
    else:
        raise HTTPException(status_code=404, detail="Данные не найдены")