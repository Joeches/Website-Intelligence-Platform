import React from 'react';
import Sidebar from '../../components/Sidebar';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-screen flex bg-slate-50">
<Sidebar />
<div className="flex-1 p-6">{children}</div>
</div>
)
}
