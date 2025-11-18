'use client';
import React, { useState } from 'react';
import { apiPost } from '@/lib/api';


export default function URLForm({ onComplete }: any) {
const [url, setUrl] = useState('');
const [loading, setLoading] = useState(false);


const submit = async () => {
setLoading(true);
const result = await apiPost('/scan/start', { url });
setLoading(false);
onComplete(result);
};


return (
<div className="mt-6">
<input
type="text"
placeholder="Enter website URL"
className="border p-3 rounded w-full"
value={url}
onChange={(e) => setUrl(e.target.value)}
/>
<button
onClick={submit}
className="mt-3 w-full p-3 bg-blue-600 text-white rounded"
disabled={loading}
>
{loading ? 'Scanning...' : 'Analyze Website'}
</button>
</div>
);
}
