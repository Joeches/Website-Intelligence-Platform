export default function ReportTable({ reports }: any) {
return (
<table className="w-full border mt-6 text-left">
<thead className="bg-gray-100">
<tr>
<th className="p-3">Website</th>
<th className="p-3">Title</th>
<th className="p-3">Date</th>
</tr>
</thead>
<tbody>
{reports.map((r: any, i: number) => (
<tr key={i} className="border-t">
<td className="p-3">{r.url}</td>
<td className="p-3">{r.title}</td>
<td className="p-3">{new Date(r.created_at).toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
);
}
