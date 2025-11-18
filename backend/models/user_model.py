from pydantic import BaseModel

class UserModel(BaseModel):
    uid: str
    email: str | None = None
    plan: str = 'free'

