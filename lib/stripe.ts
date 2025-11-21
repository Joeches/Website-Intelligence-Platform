import axios from "axios";

export async function stripeCheckout(priceId: string) {
  // Calls backend to create a Stripe Checkout session and redirects user
  try {
    const token = await getIdToken();
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/stripe/create-checkout`,
      { priceId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res?.data?.url) {
      window.location.href = res.data.url;
    } else {
      throw new Error("No checkout URL returned from server");
    }
  } catch (err) {
    console.error("stripeCheckout:", err);
    alert("Could not start checkout. Check console for details.");
  }
}

async function getIdToken(): Promise<string | null> {
  // Minimal method to fetch current user's idToken (firebase client should be initialized)
  try {
    const authModule = await import("./firebase");
    const { auth } = authModule;
    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user");
    }
    const token = await user.getIdToken();
    // store for api use
    localStorage.setItem("token", token);
    return token;
  } catch (e) {
    console.error("getIdToken error", e);
    return null;
  }
}
