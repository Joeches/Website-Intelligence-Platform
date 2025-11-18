from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from middleware.firebase_auth import verify_token_header
from services.stripe_client import create_checkout_session

router = APIRouter()

class CheckoutRequest(BaseModel):
    priceId: str

@router.post("/create-checkout")
async def create_checkout(req: CheckoutRequest, user=Depends(verify_token_header)):
    try:
        # Replace with your Netlify domain or environment var
        success_url = f"https://your-frontend-site.netlify.app/scan?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"https://your-frontend-site.netlify.app/subscription"
        session = await create_checkout_session(
            success_url=success_url,
            cancel_url=cancel_url,
            customer_email=user.get('email'),
            client_reference_id=user.get('uid'),
            price_id=req.priceId
        )
        # session.url is present for Checkout Session
        return {"url": session.url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating checkout session: {e}")

