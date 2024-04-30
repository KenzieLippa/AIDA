import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

//might want this later
//import {Route, Routes} from 'react-router-dom'

const App = ()=>{
  const [showLogin,setShowLogin] = React.useState(false);
  return(
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/> 
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      {/* import the navbar and mount it */}
    </div>
    </>
  )
}

export default App;