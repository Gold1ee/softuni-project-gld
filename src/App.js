import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import authService from "./services/authService.js";
import createPostService from "./services/createPostService.js"



import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import PlayerList from './components/PlayerList/PlayerList.js'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register.js'
import Blog from './components/Blog/Blog.js'
import Discord from './components/Discord/Discord.js'
import Faceit from './components/Faceit/Faceit.js'
import Logout from './components/Logout/Logout.js'
import CreatePost from './components/CreatePost/CreatePost.js'


function App() {
  const [userInfo, setUser] = useState({ isAuth: false, email: '' })
  useEffect(() => {
    let user = authService.getUsername();

    setUser({
      isAuth: Boolean(user),
      user: user
    })


  }, []);
  const onLogin = (username) => {
    setUser({
      isAuth: true,
      user: username
    })
  }
  const onRegister = (username) => {
    setUser({
      isAuth: true,
      user: username
    })
  }
  const onLogout = () => {
    setUser({
      isAuth: false,
      user: ''
    })
  }
  return (
    <div id='container'>
      <Header {...userInfo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/player-list' element={<PlayerList />} />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/register' element={<Register onRegister={onRegister} />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faceit' element={<Faceit />} />
        <Route path='/discord' element={<Discord />} />
        <Route path='/logout' element={<Logout onLogout={onLogout} />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>


    </div>
  );
}

export default App;
