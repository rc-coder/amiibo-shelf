'use client';

import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { authOptions } from './api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

export default function Home() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session);
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
      </div>
    );
  }
  return <h1>Amiibo app</h1>;
}
