'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';
import { RiHome7Fill } from 'react-icons/ri';
import { FaSearchPlus } from 'react-icons/fa';

const AppBar = () => {
  return (
    <div>
      <div className="bg-slate-50 p-2">
        <header className="flex items-center bg-teal-500 p-6 m-2">
          <div className="flex gap-6">
            <Link href={'/'} title="Homepage">
              <div className="flex items-center text-center gap-1">
                <RiHome7Fill size={25} />{' '}
                <span className="transition-colors text-teal-200 hover:text-white hidden sm:block">
                  Amiibo Shelf
                </span>
              </div>
            </Link>
            <Link href={'/SearchAmiibo'}>
              <div className="flex items-center text-center gap-2">
                <FaSearchPlus size={17} />{' '}
                <span className="transition-colors text-teal-200 hover:text-white hidden sm:block ">
                  Search Amiibo
                </span>
              </div>
            </Link>
          </div>

          <SignInButton />
        </header>
      </div>
    </div>
  );
};

export default AppBar;
