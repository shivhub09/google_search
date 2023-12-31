import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../context/ResultContextProvider';
import { Links } from './Links';

const Search = () => {

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-7">
      <input
        
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 mt-5 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
       
      />
        <button type="button" className="absolute top-1.5 mt-5  right-4 text-2xl text-gray-500 " >
          x
        </button>
      <Links />
    </div>
  );
};

export default Search;