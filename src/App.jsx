import React, { useState,UseEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Context from './context/context';
import Home from './views/Home'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './views/Pizza';

const App = () => {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pizza/:id" element={<Pizza/>}> </Route>

          </Routes>
          <Footer />
        </BrowserRouter> 
      </Context>
    </div>
  )
}

export default App
