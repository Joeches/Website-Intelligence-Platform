'use client';
import axios from 'axios';


export default function PDFDownloadButton({ data, token }: { data: any, token: string }){
const download = async () => {
const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/pdf/generate`, { data }, { headers: { Authorization: `Bearer ${token}` }, responseType: 'blob' });
const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
const a = document.createElement('a');
a.href = url; a.download = 'ai-fix-report.pdf'; document.body.appendChild(a); a.click(); a.remove();
}
return <button className="px-3 py-2 bg-accent text-white rounded" onClick={download}>Download PDF</button>
}
