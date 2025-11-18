export async function apiGet(path: string) {
const token = localStorage.getItem('token');
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
headers: {
Authorization: `Bearer ${token}`,
},
});
return res.json();
}


export async function apiPost(path: string, body: any) {
const token = localStorage.getItem('token');
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${token}`,
},
body: JSON.stringify(body),
});
return res.json();
}
