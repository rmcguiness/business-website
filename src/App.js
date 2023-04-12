import React from 'react';
import './App.css';
import Navbar from './components/navBar/Index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
