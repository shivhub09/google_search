import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer  from 'react-player';


import { Loading } from './Loading';
import { useResultContext } from '../context/ResultContextProvider';

const Results = () => {
  const { results, searchTerm, getResults, setSearchterm, isloading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('websearch', 'tony stark');
  }, []);

  if (isloading) return <Loading />;
  
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className='grid grid-cols-2 gap-6 sm:px-8'>
  {results?.result?.map((item, index) => (
    <div key={index} className='bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-xl font-semibold mb-2 text-blue-600'>{item.title}</h2>
      <a 
        href={item.href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='text-black hover:underline block mb-4'
      >
        {item.href}
      </a>
      <p className='text-white'>{item.body}</p>
    </div>
  ))}
</div>

      
      );
    case '/images':
      return  'IMAGES';
    case '/news':
      return 'NEWS';
    case '/videos':
      return 'VIDEOS';
    default:
      return 'ERROR';
  }
};


export default Results;
