import React from "react";
import { getCurrentUser } from "@/lib/auth";


export default async function SettingsPage() {
const user = await getCurrentUser();


return (
<div className="p-8">
<h1 className="text-3xl font-bold mb-4">Settings</h1>


<div className="mt-4 p-6 border rounded-xl">
<p className="font-semibold">Email:</p>
<p className="text-gray-700">{user?.email}</p>
</div>
</div>
);
}
