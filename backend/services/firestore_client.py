# backend/services/firestore_client.py

import os
import json
import firebase_admin
from firebase_admin import credentials, firestore


# Initialize Firebase Admin only once
if not firebase_admin._apps:
    # Expect the entire service account JSON as a single env var (recommended & safest)
    service_account_json = os.environ.get("FIREBASE_SERVICE_ACCOUNT")

    if not service_account_json:
        raise ValueError("Missing required environment variable: FIREBASE_SERVICE_ACCOUNT")

    try:
        service_account_info = json.loads(service_account_json)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON in FIREBASE_SERVICE_ACCOUNT: {e}")

    cred = credentials.Certificate(service_account_info)
    firebase_admin.initialize_app(cred)

# Export the Firestore client
db = firestore.client()


# -----------------------------
# Your existing async functions
# -----------------------------

async def upsert_user_plan(uid: str, plan_obj: dict):
    """Update or create user's plan document (merge = true)"""
    doc_ref = db.collection("users").document(uid)
    doc_ref.set(plan_obj, merge=True)
    return True


async def get_user_usage(uid: str):
    """Get current usage stats for a user"""
    doc = db.collection("usage").document(uid).get()
    if doc.exists:
        return doc.to_dict()
    return {}


async def increment_usage(uid: str):
    """Safely increment the scan count for a user"""
    doc_ref = db.collection("usage").document(uid)
    doc_ref.set({"count": firestore.Increment(1)}, merge=True)
    return True
