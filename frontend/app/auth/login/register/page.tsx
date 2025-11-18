'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = getAuth();

  const register = async () => {
    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
        await updateProfile(userCred.user, { displayName: name });
      }
      // token saved by SessionProvider automatically; navigate to dashboard
      router.push('/dashboard');
    } catch (e: any) {
      console.error("register error", e);
      alert(e?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Create an account</h2>

        <input className="w-full p-2 border rounded mb-3" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full p-2 border rounded mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded mb-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

        <button className="w-full p-2 bg-blue-600 text-white rounded" onClick={register} disabled={loading}>
          {loading ? 'Creating...' : 'Create account'}
        </button>
      </div>
    </div>
  );
}

