from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class BaseDBModel(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        json_encoders = {
            datetime: lambda dt: dt.isoformat()
        }
