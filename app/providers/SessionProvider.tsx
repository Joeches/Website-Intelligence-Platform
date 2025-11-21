'use client';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}


initializeApp(firebaseConfig);
const auth = getAuth();


export const SessionContext = createContext({ user: null as any });


export function SessionProvider({ children }: { children: React.ReactNode }) {
const [user, setUser] = useState(null as any);
useEffect(() => {
const unsub = onIdTokenChanged(auth, async (u) => {
setUser(u);
if (u) await u.getIdToken(true); // refresh
});
return () => unsub();
}, []);


return <SessionContext.Provider value={{ user }}>{children}</SessionContext.Provider>
}
