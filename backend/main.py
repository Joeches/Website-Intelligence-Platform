from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import config

# Import routers
from routers import auth, stripe_webhooks, stripe_checkout, scan, ai_processing, pdf, usage

app = FastAPI(title="AI Website Intelligence Platform - Backend")

# CORS
origins = config.ALLOWED_ORIGINS.split(",") if config.ALLOWED_ORIGINS else ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(stripe_checkout.router, prefix="/stripe", tags=["stripe"])
app.include_router(stripe_webhooks.router, prefix="/stripe", tags=["stripe-webhooks"])
app.include_router(scan.router, prefix="/scan", tags=["scan"])
app.include_router(ai_processing.router, prefix="/ai", tags=["ai"])
app.include_router(pdf.router, prefix="/pdf", tags=["pdf"])
app.include_router(usage.router, prefix="/usage", tags=["usage"])

@app.get("/health")
async def health():
    return {"status": "ok"}

