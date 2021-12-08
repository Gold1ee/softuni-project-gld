import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'


function App() {
    return (
      <div id='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        
      
      </div>
    );
  }

export default App;
