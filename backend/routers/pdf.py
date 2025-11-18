from fastapi import APIRouter, Depends, Response
from middleware.firebase_auth import verify_token_header
from services.pdf_generator import generate_pdf_from_result
from pydantic import BaseModel

router = APIRouter()

class PDFRequest(BaseModel):
    data: dict

@router.post("/generate")
async def generate_pdf(req: PDFRequest, user=Depends(verify_token_header)):
    buffer = await generate_pdf_from_result(req.data)
    return Response(content=buffer.getvalue(), media_type="application/pdf")

