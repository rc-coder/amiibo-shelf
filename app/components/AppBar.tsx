'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';
import { RiHome7Fill } from 'react-icons/ri';
import { FaSearchPlus } from 'react-icons/fa';

const AppBar = () => {
  return (
    <header className="flex items-center text-slate-950 p-3 bg-gradient-to-b from-white to-gray-200 shadow">
      <div className="flex gap-6">
        <Link
          className="transition-colors hover:text-blue-500"
          href={'/'}
          title="Homepage"
        >
          <RiHome7Fill size={25} />
        </Link>
        <Link
          className="transition-colors hover:text-blue-500 "
          href={'/SearchAmiibo'}
        >
          <div className="flex items-center gap-2">
            <FaSearchPlus size={17} /> Search Amiibo
          </div>
        </Link>
      </div>

      <SignInButton />
    </header>
  );
};

export default AppBar;
