import React from "react";
import ReportTable from "@/components/ReportTable";
import { apiGet } from "@/lib/api";


export default async function HistoryPage() {
const reports = await apiGet("/reports");


return (
<div className="p-8">
<h1 className="text-3xl font-bold mb-6">Scan History</h1>
<ReportTable reports={reports || []} />
</div>
);
}
