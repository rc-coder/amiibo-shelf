import { Suspense } from 'react';
import Search from '../components/Search';
import { AmiiboShowcase } from '../components/AmiiboShowcase';
import AmiiboSkeleton from '../components/AmiiboSkeleton';

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="p-5">
      <div className="flex justify-center w-full">
        <h1 className="text-5xl text-center p-6">Find the amiibo you own!</h1>
      </div>
      <div>
        <Search />
      </div>
      <Suspense fallback={<AmiiboSkeleton />}>
        <AmiiboShowcase searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default page;
