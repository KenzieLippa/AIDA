import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";

const App = ()=>{
  return(
    <div>
      <Navbar/> 
      <Hero/>
      <About/>
      {/* import the navbar and mount it */}
    </div>
  )
}

export default App;