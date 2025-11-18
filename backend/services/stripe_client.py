import stripe
import config

stripe.api_key = config.STRIPE_API_KEY

async def create_checkout_session(success_url: str, cancel_url: str, customer_email: str, client_reference_id: str, price_id: str):
    # stripe python SDK is sync — call it directly. For heavy load run in threadpool if needed.
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        mode='subscription',
        line_items=[{"price": price_id, "quantity": 1}],
        success_url=success_url,
        cancel_url=cancel_url,
        client_reference_id=client_reference_id,
        customer_email=customer_email
    )
    return session

