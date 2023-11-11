'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <Link href={'/SignIn'} className="text-green-600 ml-auto">
      Sign In
    </Link>
  );
};

export default SignInButton;
