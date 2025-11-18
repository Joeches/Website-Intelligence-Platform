import time
from fastapi import HTTPException

_REQUESTS = {}

def rate_limit(key: str, limit: int = 60, window: int = 60):
    now = int(time.time())
    window_start = now - (now % window)
    k = f"{key}:{window_start}"
    count = _REQUESTS.get(k, 0)
    if count >= limit:
        raise HTTPException(status_code=429, detail='Rate limit exceeded')
    _REQUESTS[k] = count + 1

