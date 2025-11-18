from fastapi import Depends, HTTPException, Request
import firebase_admin
from firebase_admin import auth as firebase_auth

async def verify_token_header(request: Request):
    auth = request.headers.get('authorization')
    if not auth or not auth.startswith('Bearer '):
        raise HTTPException(status_code=401, detail='Missing or invalid auth header')
    token = auth.split(' ')[1]
    try:
        decoded = firebase_auth.verify_id_token(token)
        # decoded contains 'uid' and standard fields; normalize return
        return {"uid": decoded.get("uid"), "email": decoded.get("email")}
    except Exception as e:
        raise HTTPException(status_code=401, detail=f'Invalid token: {e}')

