'use client';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Login(){
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (e) {
      console.error("login error", e);
      alert("Login failed");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow">
        <h3 className="text-xl font-bold mb-4">Sign in</h3>
        <button onClick={login} className="px-4 py-2 bg-blue-600 text-white rounded">Sign in with Google</button>
      </div>
    </div>
  )
}
