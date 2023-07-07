import React from 'react';
import { Routes, Route } from 'react-router-dom'
import "animate.css";
import "./App.css"

//All Routes/Pages
import Home from './Pages/Home';
import Achievements from './Pages/Achievements';
import Sponsors from './Pages/Sponsors'
import HallOfFame from './Pages/HallOfFame'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/achievements' element={<Achievements/>} />
        <Route exact path='/sponsors' element={<Sponsors/>} />
        <Route exact path='/halloffame' element={<HallOfFame/>} />
        <Route exact path='/about' element={<AboutUs/>} />
        <Route exact path='/contactus' element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;