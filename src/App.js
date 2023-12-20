import React , { useState }from 'react'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Router } from './Components/Router'
const App = () => {

  const [darkTheme , setDarkTheme ] = useState(false);

  return (
    <div className={ darkTheme ? 'dark' : ''}>
          <div className={ 'bg-gray-900 text-gray-200 min-h-screen' }>
            <Navbar />
            <Router/>
            <Footer/>
          </div>
    </div>
  )
}

export default App
