import React from 'react'
import Navbar from './navBar/Index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const Header = () => {
  return (
    <div>
        <h1> Title Text</h1>
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default Header