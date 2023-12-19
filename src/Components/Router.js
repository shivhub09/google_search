import React from 'react';
import { Routes, Route, Navigate , } from 'react-router-dom';

import Results from './Results';
import Search from './Search';

export const Router = () => {
  return (
    <div className='p-4'>
      <Routes>
          <Route exact path='/' Component={Search}>
          </Route>
      </Routes>
      <Routes>
          <Route exact path='/search' Component={Results}></Route>
      </Routes>
      <Routes>
          <Route exact path='/images' Component={Results}></Route>
      </Routes>
      <Routes>
          <Route exact path='/videos' Component={Results}></Route>
      </Routes>
      <Routes>
          <Route exact path='/news' Component={Results}></Route>
      </Routes>
    </div>
  );
};
