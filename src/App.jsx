import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home"
import Chat from "./Pages/Chat";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";

//might want this later
//import {Route, Routes} from 'react-router-dom'

const App = ()=>{
  const [showLogin,setShowLogin] = React.useState(false);
  return(
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/mywork' element={<MyWork/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
     
      {/* import the navbar and mount it */}
    </div>
    </>
  )
}

export default App;