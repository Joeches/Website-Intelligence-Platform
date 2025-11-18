'use client';
import { useState, useContext } from 'react';
import axios from 'axios';
import { SessionContext } from '../../providers/SessionProvider';


export default function ScanPage(){
const { user } = useContext(SessionContext);
const [url, setUrl] = useState('');
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<any>(null);


const startScan = async () => {
if (!url) return;
setLoading(true);
try{
const token = await user.getIdToken();
const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/scan/start`, { url }, { headers: { Authorization: `Bearer ${token}` } });
setResult(res.data.result);
}catch(err){
console.error(err);
alert('Scan failed. Check console.');
}finally{ setLoading(false); }
}


return (
<div>
<h2 className="text-2xl font-bold mb-4">Start a new scan</h2>
<div className="flex gap-2">
<input className="flex-1 p-2 border rounded" placeholder="https://example.com" value={url} onChange={e => setUrl(e.target.value)} />
<button className="px-4 py-2 bg-accent text-white rounded" onClick={startScan} disabled={!user || loading}>{loading ? 'Scanning...' : 'Scan'}</button>
</div>
{ result && (
<div className="mt-6 bg-white p-4 rounded shadow">
<h3 className="font-bold">Result</h3>
<pre className="overflow-x-auto mt-2">{JSON.stringify(result, null, 2)}</pre>
</div>
) }
</div>
)
}
