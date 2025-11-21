'use client';
import '../styles/globals.css';
import { SessionProvider } from './providers/SessionProvider';


export const metadata = {
title: 'AI Website Intelligence',
description: 'AI-powered website audit and SEO fix generator'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<SessionProvider>
{children}
</SessionProvider>
</body>
</html>
)
}
