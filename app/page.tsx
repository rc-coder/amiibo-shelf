import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

import AmiiboCard from './components/AmiiboCard';
import Search from './components/Search';
import { AmiiboShowcase } from './components/AmiiboShowcase';
import { Suspense } from 'react';
import prisma from '@/lib/db';
import { amiibo } from './utils/utils';
import Link from 'next/link';

//Definir el inteface amiibo

export default async function Home() {
  const session = await getServerSession(authOptions);

  const userID = Number(session?.user.id);

  const storedAmiibos = await prisma.amiibo.findMany({
    where: {
      ownerId: userID || undefined,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center align-middle w-full h-full">
      {session && session.user ? (
        <div>
          <div className="flex justify-start w-full ">
            <h1 className="text-5xl text-center p-6 ">
              {session.user.name}&apos;s Shelf
            </h1>
          </div>
          <section>
            {storedAmiibos.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {storedAmiibos.map((amiibo) => (
                  <div
                    key={amiibo.tail + amiibo.tail}
                    className="flex justify-center"
                  >
                    <AmiiboCard amiiboData={amiibo} buttonToggle={false} />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                Your shelf is empty, go{' '}
                <Link href={'/SearchAmiibo'} className="text-teal-600">
                  search
                </Link>{' '}
                and add some amiibo
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center align-middle items-center w-full h-full">
          <span className="text-base font-semibold leading-6 text-white bg-teal-500 p-6 rounded-lg mt-40">
            <h1 className="text-5xl">Welcome to amiibo shelf!</h1>
          </span>
          <div>
            You can display your amiibo, go{' '}
            <Link href={'/SignUp'} className="text-teal-600">
              sign up
            </Link>
            .
          </div>
        </div>
      )}
    </div>
  );
}
