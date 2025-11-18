import firebase_admin
from firebase_admin import credentials, firestore
import config

# Initialize firebase admin with env vars
if not firebase_admin._apps:
    private_key = config.FIREBASE_PRIVATE_KEY
    if private_key:
        private_key = private_key.replace('\\n', '\n')
    cred_dict = {
        "type": "service_account",
        "project_id": config.FIREBASE_PROJECT_ID,
        "private_key_id": None,
        "private_key": private_key,
        "client_email": config.FIREBASE_CLIENT_EMAIL,
        "client_id": None,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": None
    }
    cred = credentials.Certificate(cred_dict)
    firebase_admin.initialize_app(cred, {"databaseURL": config.FIREBASE_DATABASE_URL})

db = firestore.client()

async def upsert_user_plan(uid: str, plan_obj: dict):
    doc_ref = db.collection('users').document(uid)
    doc_ref.set(plan_obj, merge=True)
    return True

async def get_user_usage(uid: str):
    doc = db.collection('usage').document(uid).get()
    if doc.exists:
        return doc.to_dict()
    return {}

async def increment_usage(uid: str):
    doc_ref = db.collection('usage').document(uid)
    # Use transaction safe increment
    doc_ref.set({'count': firestore.Increment(1)}, merge=True)
    return True

