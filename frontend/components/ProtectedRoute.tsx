'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SessionContext } from '../app/providers/SessionProvider';


export default function ProtectedRoute({ children }: { children: React.ReactNode }){
const { user } = useContext(SessionContext);
const router = useRouter();
useEffect(()=>{ if (!user) router.push('/auth/login'); }, [user]);
if (!user) return null;
return <>{children}</>
}
