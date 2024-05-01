import React, { useState, useRef, useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/AidaCircle.png'
import underline from '../../assets/swirl.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { SiteContext } from '../../Context/SiteContext'
import profile from '../../assets/profile_icon.png'
import logout_img from '../../assets/logout_icon.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home");
  const {token, setToken} = useContext(SiteContext);
  const navigate = useNavigate();
  const logout = ()=>{
    //remove the token
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className='navbar'>
     <img src={logo} alt=""/>
     <img src={menu_open} onClick={openMenu} alt="" className='nav-mode-open'/>
     <ul ref={menuRef}  className="nav-menu">
      {/* check state after p tag */}
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mode-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt =''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt =''/>:<></>}</li>
        {!token?  <div onClick={()=>{setShowLogin(true); closeMenu();}} className="nav-Login">Log In</div>:<div className='navbar-profile'>
          <img src={profile} alt=""/>
          <ul className="nav-profile-dropdown">
            {/* <li><img src="" alt="" /></li>
            <hr /> */}
            <li onClick={logout}><img src={logout_img} alt="" /><p>Log Out</p></li>
          </ul>
          </div>}
       
     </ul>
    </div>

  )
}

export default Navbar