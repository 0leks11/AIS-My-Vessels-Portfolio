import os
import fastapi
from fastapi.responses import Response
import uvicorn
from dotenv import load_dotenv
from datetime import datetime, timedelta
from aisdb import PostgresDBConn, DBQuery

load_dotenv()  # Загружаем переменные окружения

app = fastapi.FastAPI()

db_args = dict(
    host=os.getenv('AISDB_REST_DBHOST'),
    port=int(os.getenv('AISDB_REST_DBPORT')),
    user=os.getenv('AISDB_REST_DBUSER'),
    password=os.getenv('AISDB_REST_DBPASSWORD'),
)

@app.get("/")
def read_root():
    return {"message": "Welcome to AISDB API"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)