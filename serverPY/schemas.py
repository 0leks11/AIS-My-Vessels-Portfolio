from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class VesselData(BaseModel):
    mmsi: int
    time: datetime
    longitude: float
    latitude: float
    sog: Optional[float]
    cog: Optional[float]
    heading: Optional[float]
    nav_status: Optional[str]

    class Config:
        orm_mode = True