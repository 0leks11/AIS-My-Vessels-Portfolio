from sqlalchemy import Column, Integer, BigInteger, Float, String, DateTime
from database import Base

class AISDynamic(Base):
    __tablename__ = 'ais_dynamic'

    id = Column(Integer, primary_key=True, index=True)
    mmsi = Column(BigInteger, index=True)
    time = Column(DateTime)
    longitude = Column(Float)
    latitude = Column(Float)
    speed = Column(Float)  # Переименовано из sog
    course = Column(Float)  # Переименовано из cog
    status = Column(String) 
    heading = Column(Float)
    rot = Column(Float)  # Rate of turn
    nav_status = Column(String)
    src = Column(String)