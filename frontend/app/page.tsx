import Link from 'next/link';


export default function Landing() {
return (
<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50">
<div className="max-w-4xl w-full p-8">
<header className="flex items-center justify-between mb-8">
<h1 className="text-3xl font-extrabold">AI Website Intelligence</h1>
<nav>
<Link href="/dashboard" className="px-4 py-2 bg-accent text-white rounded">Dashboard</Link>
</nav>
</header>
<section className="text-center py-12">
<h2 className="text-4xl font-bold mb-4">Instant AI website audits, fixes & conversion copy</h2>
<p className="text-slate-600 mb-6">Paste a URL and get SEO, accessibility, and conversion improvements powered by Groq & HuggingFace.</p>
<div className="flex justify-center gap-4">
<Link href="/dashboard/scan" className="px-6 py-3 bg-mint text-white rounded shadow">Start Free Scan</Link>
<Link href="/subscription" className="px-6 py-3 border border-slate-200 rounded">Pricing & Plans</Link>
</div>
</section>
<section className="mt-12 bg-white p-6 rounded shadow">
<h3 className="font-bold mb-2">Why teams love it</h3>
<ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<li className="p-4 border rounded">Agency-ready PDF reports</li>
<li className="p-4 border rounded">Enterprise white-label</li>
<li className="p-4 border rounded">Stripe billing + Firebase auth</li>
</ul>
</section>
</div>
</main>
)
}
