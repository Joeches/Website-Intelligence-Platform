from fastapi import APIRouter, Request, Header, HTTPException
import stripe
import config
from services.firestore_client import upsert_user_plan

stripe.api_key = config.STRIPE_API_KEY
router = APIRouter()

@router.post("/webhook")
async def stripe_webhook(request: Request, stripe_signature: str = Header(None)):
    payload = await request.body()
    try:
        event = stripe.Webhook.construct_event(
            payload=payload, sig_header=stripe_signature, secret=config.STRIPE_WEBHOOK_SECRET
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Webhook error: {e}")

    # Handle relevant events
    typ = event.get("type")
    if typ == "checkout.session.completed":
        session = event["data"]["object"]
        customer = session.get("customer")
        client_reference = session.get("client_reference_id")
        if client_reference:
            # Mark user as pro (example mapping — adapt to real price mapping)
            await upsert_user_plan(client_reference, {"plan": "pro", "stripe_customer_id": customer})
    elif typ == "invoice.payment_failed":
        pass

    return {"received": True}

