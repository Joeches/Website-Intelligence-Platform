from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, HttpUrl
from backend.middleware.firebase_auth import verify_token_header
from backend.services.crawler import crawl_url
from backend.services.plan_limits import check_and_consume_quota
from backend.services.seo_analyzer import analyze

router = APIRouter()

class ScanRequest(BaseModel):
    url: HttpUrl

@router.post("/start")
async def start_scan(payload: ScanRequest, user=Depends(verify_token_header)):
    uid = user.get("uid")
    allow = await check_and_consume_quota(uid)
    if not allow:
        raise HTTPException(status_code=429, detail="Plan quota exceeded")
    html = await crawl_url(str(payload.url))
    result = await analyze(str(payload.url), html)
    return {"status": "done", "result": result}
