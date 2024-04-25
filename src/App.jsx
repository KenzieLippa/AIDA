import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

const App = ()=>{
  return(
    <div>
      <Navbar/> 
      <Hero/>
      <About/>
      <Services/>
      {/* import the navbar and mount it */}
    </div>
  )
}

export default App;