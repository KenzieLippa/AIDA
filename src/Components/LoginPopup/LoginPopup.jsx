import React, {useState} from 'react'
import './LoginPopup.css'
import cross from '../../assets/cross_icon.png'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurr] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={cross} alt="" />
            </div>
        </form>
    </div>

  )
}

export default LoginPopup