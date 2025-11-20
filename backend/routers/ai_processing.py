from fastapi import APIRouter, Depends
from pydantic import BaseModel
from backend.middleware.firebase_auth import verify_token_header
from backend.services.ai_huggingface import extract_keywords
from backend.services.ai_groq import rewrite_seo

router = APIRouter()

class AIRequest(BaseModel):
    text: str

@router.post("/keywords")
async def keywords(req: AIRequest, user=Depends(verify_token_header)):
    kw = await extract_keywords(req.text)
    return {"keywords": kw}

@router.post("/rewrite")
async def rewrite(req: AIRequest, user=Depends(verify_token_header)):
    out = await rewrite_seo(req.text)
    return {"rewrite": out}

