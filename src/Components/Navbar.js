import React from 'react';
import {Link } from 'react-router-dom';
import {Router} from './Router';
import {Footer} from './Footer';
import Search from './Search';

export const Navbar = () => {
  return (
    <div className='p-5 pb-5 flex flex-wrap sm:justify-between justify-center border-b border-gray-500 '>
        <div className='flex flex-justify-between items-center space-x-5  w-screen pt-4'>
            <Link to="/">
                <p className=' text-3xl bg-blue-200 font-bold text-gray-700 py-2 px-3 rounded'>
                  Google🔎
                </p>
            </Link>
            <Search/>
        </div>
    </div>
  )
}

