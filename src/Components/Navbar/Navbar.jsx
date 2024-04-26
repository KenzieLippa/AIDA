import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/AidaCircle.png'
import underline from '../../assets/swirl.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
     <img src={logo} alt=""/>
     <ul className="nav-menu">
      {/* check state after p tag */}
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt =''/>:<></>}</li>
     </ul>
     <div className="nav-Login">Log In/Sign Up</div>
    </div>

  )
}

export default Navbar