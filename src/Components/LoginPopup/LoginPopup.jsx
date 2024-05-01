import React, {useContext, useEffect, useState} from 'react'
import './LoginPopup.css'
import cross from '../../assets/cross_icon.png'
import axios from 'axios'
import  {SiteContext}  from '../../Context/SiteContext'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurr] = useState("Sign Up")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const {url,setToken} = useContext(SiteContext)
    //console.log(url);
    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))

    }
    const onLogin = async (event) =>{
        //link with the form tag
        event.preventDefault()
        let newUrl = url;
        //console.log(url);
        if(currState === "Login"){
            newUrl +="/api/user/login"
        }
        else{
            newUrl +="/api/user/register"
        }
        const response = await axios.post(newUrl, data); //might need an await
    
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={cross} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"? <></>: <input name = 'name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
               
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>
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