// Minimal callback page in case of OAuth redirect flows; for Google popup this may not be used.
// We keep a safe page to show success and redirect to dashboard.

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OAuthCallback() {
  const router = useRouter();
  useEffect(() => {
    // short delay then redirect to dashboard
    const t = setTimeout(() => router.push('/dashboard'), 1200);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow text-center">
        <h3 className="text-lg font-bold">Signing you in…</h3>
        <p className="mt-2 text-gray-600">Redirecting to your dashboard</p>
      </div>
    </div>
  );
}

