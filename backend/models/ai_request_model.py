from pydantic import BaseModel

class AIRequestModel(BaseModel):
    text: str

