'use client';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SessionContext } from '../providers/SessionProvider';


export default function SubscriptionPage(){
const { user } = useContext(SessionContext);
const [prices, setPrices] = useState([]);


useEffect(()=>{
setPrices([
{ id: 'price_free', name: 'Free', price_cents: 0, desc: '1 scan/day' },
{ id: 'price_pro', name: 'Pro', price_cents: 1999, desc: '30 scans/month' },
{ id: 'price_enterprise', name: 'Enterprise', price_cents: 9999, desc: 'Unlimited & white-label' }
])
},[])


const subscribe = async (priceId: string) => {
if (!user) { alert('Sign in first'); return; }
try{
const token = await user.getIdToken();
const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/stripe/create-checkout`, { priceId }, { headers: { Authorization: `Bearer ${token}` } });
window.location.href = res.data.url;
}catch(e){ console.error(e); alert('Could not start checkout'); }
}


return (
<div className="max-w-4xl mx-auto p-6">
<h2 className="text-2xl font-bold mb-4">Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{prices.map(p => (
<div key={p.id} className="p-4 bg-white rounded shadow">
<h3 className="font-bold text-xl">{p.name}</h3>
<p className="mt-2 text-slate-600">{p.desc}</p>
<div className="mt-4 text-2xl font-extrabold">${(p.price_cents/100).toFixed(2)}</div>
<button className="mt-4 px-4 py-2 bg-accent text-white rounded" onClick={()=>subscribe(p.id)}>Choose</button>
</div>
))}
</div>
</div>
)
}
