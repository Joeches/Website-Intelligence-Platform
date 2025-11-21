'use client';
import Link from 'next/link';


export default function Sidebar(){
return (
<aside className="w-64 bg-white h-screen p-4 border-r">
<div className="mb-6">
<h2 className="font-bold text-lg">AI Website Intelligence</h2>
</div>
<nav className="flex flex-col gap-2">
<Link href="/dashboard" className="p-2 rounded hover:bg-slate-50">Overview</Link>
<Link href="/dashboard/scan" className="p-2 rounded hover:bg-slate-50">Start Scan</Link>
<Link href="/dashboard/results" className="p-2 rounded hover:bg-slate-50">Results</Link>
<Link href="/subscription" className="p-2 rounded hover:bg-slate-50">Billing</Link>
<Link href="/auth/login" className="p-2 rounded hover:bg-slate-50">Sign In</Link>
</nav>
</aside>
)
}
