'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';
const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-2 ml-auto" title="Log Out">
        <p className="text-white">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="text-red-600 hover:text-red-500"
        >
          <AiOutlineLogout size={22} />
        </button>
      </div>
    );
  }
  return (
    <Link href={'/SignIn'} className="text-slate-950 ml-auto" title="Login">
      <div className="flex gap-2 ml-auto">
        <p className="text-white">Login</p>
        <AiOutlineLogin size={25} />
      </div>
    </Link>
  );
};

export default SignInButton;
