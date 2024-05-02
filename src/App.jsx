import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home"

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
      </Routes>
     
      {/* import the navbar and mount it */}
    </div>
    </>
  )
}

export default App;