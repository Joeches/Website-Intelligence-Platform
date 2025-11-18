import React from "react";
await stripeCheckout(priceId);
};


return (
<div className="p-8">
<h1 className="text-3xl font-bold mb-6">Billing</h1>


<PlanUpgradeBanner />


<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 border rounded-xl shadow-sm">
<h2 className="text-xl font-semibold">Free Plan</h2>
<p className="text-gray-600 mt-2">1 scan/day</p>
</div>


<div className="p-6 border rounded-xl shadow-sm bg-blue-50">
<h2 className="text-xl font-semibold">Pro</h2>
<p className="text-gray-600 mt-2">Unlimited scans</p>
<button
className="mt-4 p-2 bg-blue-600 rounded text-white"
onClick={() => handleUpgrade(process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!)}
>Upgrade</button>
</div>


<div className="p-6 border rounded-xl shadow-sm bg-gray-50">
<h2 className="text-xl font-semibold">Enterprise</h2>
<p className="text-gray-600 mt-2">Full analytics + Team access</p>
<button
className="mt-4 p-2 bg-gray-800 rounded text-white"
onClick={() => handleUpgrade(process.env.NEXT_PUBLIC_STRIPE_ENT_PRICE_ID!)}
>Upgrade</button>
</div>
</div>
</div>
);
}
