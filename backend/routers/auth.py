from fastapi import APIRouter, Depends, HTTPException, Request
from middleware.firebase_auth import verify_token_header

router = APIRouter()

@router.get("/verify")
async def verify_user(request: Request, user=Depends(verify_token_header)):
    return {"uid": user.get("uid"), "email": user.get("email")}

