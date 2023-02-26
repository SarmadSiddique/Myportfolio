import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Navbar/Home';
import Contact from './Components/Navbar/Contact';
import Experience from './Components/Navbar/Experience';
import Testimonials from './Components/Navbar/Testimonials';
import Portfolio from './Components/Navbar/Portfolio.jsx';
import MainHeader from './Components/MainHeader';



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
