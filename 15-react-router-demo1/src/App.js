import React from 'react'

import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Timer from './Timer'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
        <li>
          <Link to='/timer-page'>Timer</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/timer-page' element={<Timer />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

const NotFoundPage = () => <h1>Page not Found!</h1>
