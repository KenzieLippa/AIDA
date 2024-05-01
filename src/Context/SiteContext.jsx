import {createContext, useEffect, useState} from "react";

export const SiteContext = createContext(null)

const SiteContextProvider = (props)=>{
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")

    useEffect(()=>{
        if(localStorage.getItem("token")){
            //if we have a token
            setToken(localStorage.getItem("token"));
            //when we reload we wont get logged out

        }
    },[])
    const contextValue = {
        url,
        token,
        setToken
    }
    return(
        <SiteContext.Provider value={contextValue}>
            {props.children}
        </SiteContext.Provider>
    )
}

export default SiteContextProvider;

