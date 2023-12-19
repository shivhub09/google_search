import React from 'react';
import { Routes, Route, Navigate , } from 'react-router-dom';

import Results from './Results';
import Search from './Search';

export const Router = () => {
  return (
    <div className='p-4'>
      <Routes>
          <Route exact path='/' Component={Search}></Route>
      </Routes>
      <Routes>
          <Route exact path='/results' Component={Results}></Route>
      </Routes>
    </div>
  );
};
