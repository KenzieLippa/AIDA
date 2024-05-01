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
            <div className="login-popup-input">
                {currState==="Login"? <></>: <input type="text" placeholder='Your name' required />}
               
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
                </div>
                <button>
                    {currState==="Sign Up"?"Create Acount" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing I agree to sell my soul to what ever dark entity is waiting to steal data from this site</p>

                </div>
           
                {currState === "Login"?
                <p>Create a new account <span onClick={()=>{setCurr("Sign Up")}}>Click here</span></p>:
                <p>Already have an account? <span onClick={()=>{setCurr("Login")}}>Login here</span></p>
                }
        </form>
    </div>

  )
}

export default LoginPopup