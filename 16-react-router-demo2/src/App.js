import React from 'react'

import { Link, Routes, Route, useNavigate } from 'react-router-dom'

import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Timer from './Timer'
import Products from './Products'
import Employees from './Employees'

function App() {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button
          style={{ marginLeft: 10, rightMargin: 10 }}
          onClick={() => navigate(1)}
        >
          Go Forward
        </button>

        <button onClick={() => navigate('/contact-us')}>
          Jump to Contact Us
        </button>
      </div>
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
          <Link to='/timer'>Timer</Link>
        </li>
        <li>
          <Link to='/products/100'>iPhone</Link>
        </li>
        <li>
          <Link to='/products/200'>Android Phone</Link>
        </li>

        <li>
          <Link to='/employees?eid=100'>Virat</Link>
        </li>
        <li>
          <Link to='/employees?eid=200'>Rohit</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/employees' element={<Employees />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

const NotFoundPage = () => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>
        You are looking for a page that doesn't exist. Check the URL.
      </h1>
      Take me to the <Link to='/'>Home</Link> page.
    </div>
  )
}
