import Link from "next/link";
import { logout } from "@/lib/auth";


export default function Navbar() {
return (
<nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
<Link href="/dashboard" className="text-xl font-bold">AI Website Intelligence</Link>


<div className="flex gap-6">
<Link href="/dashboard/history">History</Link>
<Link href="/dashboard/billing">Billing</Link>
<Link href="/dashboard/settings">Settings</Link>
<button className="text-red-600" onClick={logout}>Logout</button>
</div>
</nav>
);
}
