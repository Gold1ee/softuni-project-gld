import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'



import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import PlayerList from './components/PlayerList/PlayerList.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import Blog from './components/Blog/Blog.js'
import Discord from './components/Discord/Discord.js'
import Faceit from './components/Faceit/Faceit.js'


function App() {
  //if ( window.location.path === "discord" ){
  //window.location = "https://discord.gg/Wuukfe9AMW"
  //}
  return (
    <div id='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/player-list' element={<PlayerList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faceit' element={<Faceit/> } />
      </Routes>


    </div>
  );
}

export default App;
