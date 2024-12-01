from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class VesselData(BaseModel):
    mmsi: str
    time: datetime
    longitude: float
    latitude: float
    speed: Optional[float] = None
    course: Optional[float] = None
    status: Optional[str] = None
    destination: Optional[str] = None
    eta: Optional[str] = None
    atd: Optional[str] = None
    previousPort: Optional[str] = None

    class Config:
        orm_mode = True