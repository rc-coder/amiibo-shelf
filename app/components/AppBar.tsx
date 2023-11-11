'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';

const AppBar = () => {
  return (
    <header className="flex text-slate-950 gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={'/'}>
        Home Page
      </Link>
      <Link
        className="transition-colors hover:text-blue-500"
        href={'/UserPost'}
      >
        User Post Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={'/SignUp'}>
        Sign Up
      </Link>
      <SignInButton />
    </header>
  );
};

export default AppBar;
