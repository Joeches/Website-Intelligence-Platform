from backend.services.firestore_client import get_user_usage, increment_usage

async def check_and_consume_quota(uid: str) -> bool:
    usage = await get_user_usage(uid)
    plan = usage.get('plan', 'free') if usage else 'free'
    count = usage.get('count', 0) if usage else 0
    limits = {'free': 1, 'pro': 30, 'enterprise': 999999}
    if count >= limits.get(plan, 1):
        return False
    await increment_usage(uid)
    return True

