from fastapi import APIRouter, Request, Header, HTTPException
import stripe
import config
from backend.services.firestore_client import upsert_user_plan

# Configure Stripe once at import time
stripe.api_key = config.STRIPE_API_KEY

router = APIRouter()


@router.post("/webhook")
async def stripe_webhook(
    request: Request,
    stripe_signature: str = Header(None),
):
    payload = await request.body()

    try:
        event = stripe.Webhook.construct_event(
            payload=payload,
            sig_header=stripe_signature,
            secret=config.STRIPE_WEBHOOK_SECRET,
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Webhook error: {e}")

    # Handle relevant events
    event_type = event.get("type")

    if event_type == "checkout.session.completed":
        session = event["data"]["object"]
        client_reference_id = session.get("client_reference_id")

        if client_reference_id:
            customer_id = session.get("customer")
            # Upgrade user to pro plan (customize logic as needed)
            await upsert_user_plan(
                client_reference_id,
                {"plan": "pro", "stripe_customer_id": customer_id},
            )

    elif event_type == "invoice.payment_failed":
        # Add downgrade / notification logic here if needed
        pass

    return {"received": True}
