'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [type, setType] = useState('figure');

  useEffect(() => {
    if (!text) {
      router.push(`/SearchAmiibo?type=${type}`);
    } else {
      router.push(`/SearchAmiibo?type=${type}&search=${text}`);
    }
  }, [text, type, router]);

  // useEffect(() => {
  //   console.log(type);
  // }, [type]);

  // const chooseType = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setType(e.target.value);
  //   console.log(e.target.value);
  //   console.log(type);
  // };

  return (
    <div className="flex flex-col gap-2 p-4">
      <form className="flex flex-row gap-2">
        <p>Amiibo type:</p>
        <select
          id="type"
          name="amiibos"
          className="block w-auto rounded-md border-0 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="figure">Figure</option>
          <option value="card">Card</option>
          <option value="Yarn">Yarn</option>
        </select>
      </form>
      <div className="w-full flex flex-row justify-start">
        <div className="relative rounded-md w-[60%]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-950">
            <IoSearch size={20} />
          </div>
          <input
            value={text}
            placeholder="Search amiibos"
            onChange={(e) => setText(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
