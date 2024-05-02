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
import { useNavigate, Link } from 'react-router-dom'

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
        <li><Link to='/' className='anchor-link'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt =''/>:<></>}</Link></li>
        <li><Link to='/about' className='anchor-link'><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt =''/>:<></>}</Link></li>
        <li><Link to='/services' className='anchor-link'><p onClick={()=>setMenu("services")}>Services</p>{menu==="services"?<img src={underline} alt =''/>:<></>}</Link></li>
        <li><Link to='/mywork' className='anchor-link'><p onClick={()=>setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} alt =''/>:<></>}</Link></li>
        <li><Link to='/chat' className='anchor-link'><p onClick={()=>setMenu("chat")}>Chat</p>{menu==="chat"?<img src={underline} alt =''/>:<></>}</Link></li>
        <li><Link to='/contact' className='anchor-link'><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt =''/>:<></>}</Link></li>
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