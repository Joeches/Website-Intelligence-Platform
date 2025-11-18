export default function DashboardHome(){
return (
<div>
<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
<p className="text-slate-600">Overview, recent scans and quick actions</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
<div className="p-4 bg-white rounded shadow">Scans this month</div>
<div className="p-4 bg-white rounded shadow">AI tokens used</div>
<div className="p-4 bg-white rounded shadow">Billing</div>
</div>
</div>
)
}
