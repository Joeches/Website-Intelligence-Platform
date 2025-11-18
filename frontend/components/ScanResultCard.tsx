export default function ScanResultCard({ result }: { result: any }){
return (
<div className="p-4 bg-white rounded shadow">
<h3 className="font-bold">{result.title}</h3>
<p className="text-slate-600">URL: {result.url}</p>
<div className="mt-2">
<strong>H1s:</strong>
<ul className="list-disc ml-6">{result.h1?.map((h:string,i:number)=>(<li key={i}>{h}</li>))}</ul>
</div>
<div className="mt-2">
<strong>Keywords:</strong>
<div className="flex gap-2 flex-wrap mt-2">{result.keywords?.map((k:string,i:number)=>(<span key={i} className="px-2 py-1 bg-slate-100 rounded">{k}</span>))}</div>
</div>
</div>
)
}
