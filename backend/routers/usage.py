from fastapi import APIRouter, Depends
from middleware.firebase_auth import verify_token_header
from services.firestore_client import get_user_usage

router = APIRouter()

@router.get("/me")
async def usage_me(user=Depends(verify_token_header)):
    uid = user.get("uid")
    doc = await get_user_usage(uid)
    return doc

