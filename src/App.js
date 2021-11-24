import React from 'react'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router';
import Login from './Components/Login/Login';
import "./App.css"
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';


export default function App() {
  return (
    <div>
    
      <div >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<SignUp/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
