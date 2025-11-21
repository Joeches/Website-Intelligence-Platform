export const PLANS = {
  FREE: "free",
  PRO: "pro",
  ENTERPRISE: "enterprise",
};

export const STRIPE_PRICE_IDS = {
  PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "price_pro",
  ENTERPRISE: process.env.NEXT_PUBLIC_STRIPE_ENT_PRICE_ID || "price_enterprise",
};
