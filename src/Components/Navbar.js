import React from 'react';
import {Link } from 'react-router-dom';

import {Router} from './Router';
import {Footer} from './Footer';

export const Navbar = () => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b border-gray-200'>
        <div className='flex flex-justify-between items-center space-x-5  w-screen'>
            <Link to="/">
                <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded'>
                  Google🔎
                </p>
            </Link>
            <Router/>
        </div>

    </div>
  )
}

