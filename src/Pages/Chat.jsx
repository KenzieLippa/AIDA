import React, { useEffect } from 'react'
import { useState, useRef, useContext } from 'react'
import './Chat.css'
import aida from '../assets/HippiePortrait.png'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import sendBtn from '../assets/send.svg'
import userIcon from '../assets/profile_icon.png'
import aidaIcon from '../assets/HippiePortrait.png'
import { sendMsgToOpenAI } from "./openai";
import { SiteContext } from '../Context/SiteContext'

const Chat = () => {
  const msgEnd = useRef(null);
  const {token} = useContext(SiteContext)
  const [input, setInput] = useState(""); //set name hook
  const [messages, setMessages] = useState([{
    //for every object carry text which is message and a boolean to see if bot or not
    text: "Hey, I'm Aida.",
    isBot: true,
  },
]);

useEffect(()=>{
  //every time the message is changed run this and auto scroll
  fetchMessages();
  msgEnd.current.scrollIntoView();

},[messages])
const fetchMessages = async()=>{
  try{
    const res = await fetch('/messages', {
      headers:{
        'Authorization': `Bearer ${token}`
      }

    });
    if(!res.ok){
      console.error('STUPID DATA')
      console.log(await res.text());
      return
    }
    const data = await res.json();
    setMessages(data.messages);
  }catch(error){
    console.error('ERrror fetching messages', error);
  }
}

  const handleSend = async()=>{
    const text = input;
    //clear the input
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    //wait for response to come
    const res = await sendMsgToOpenAI(text);
    console.log(res);
    //append all previous messages and then add the new ones
    setMessages([...messages, 
      {text: text, isBot: false},
      {text: res, isBot: true}
    ])
  }

  const handleEnter = async(e)=>{
    if(e.key==='Enter') await handleSend();
  }
  const handleQuery = async(e)=>{
    const text = e.target.value;
    console.log("Query text:", text); // This will show what text is being sent

    if (!text) {
        console.error('No text to send to API');
        return; // Add a return to stop executing if text is not valid
    }
    //clear the input
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    //wait for response to come
    const res = await sendMsgToOpenAI(text);
    console.log(res);
    //append all previous messages and then add the new ones
    setMessages([...messages, 
      {text: text, isBot: false},
      {text: res, isBot: true}
    ])
  
  }
  return (
    <div className='GPT'>
      <div className="sidebar">
        <div className="upper-side">
          <div className="upper-side-image"><img src={aida} alt="Aida" className='logo'/> <span className='brand'>AIDA</span></div>
           
            <button className="newChat" onClick={()=>{window.location.reload()}}>
              <img src={addBtn} alt="" className="addBtn" />New Chat
            </button>
            <div className="chat-logs">
              <button className="chat"  value="What is the meaning of life?" onClick={handleQuery}>
                <img src={msgIcon} alt="chat" className="chat-image" /> <p className="chat-title"> What is the meaning of life?</p>
              </button>
              <button className="chat" value="The beauty of the greek language" onClick={handleQuery} >
                <img src={msgIcon} alt="chat" className="chat-image" /><p className="chat-title">The beauty of the greek language</p>
              </button>
            
             </div>
         </div>
        <div className="lower-side">
          <div className="list-items"><img src={home} alt="" className='list-items-img'/>Home</div>
          <div className="list-items"><img src={saved} alt="" className='list-items-img'/>Saved</div>
          {/* could add another lower down if i want ect... */}
        </div>
      </div>
      <div className="main">
        <div className="main-chats">
          {/* <div className="main-chats-chat">
            <img className='chat-img' src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum aliquam laboriosam tenetur quibusdam, id possimus nisi ex quidem sint rerum!
            </p>
          </div>
          <div className="main-chats-chat bot">
            <img className='chat-img' src={aidaIcon} alt="" />
            <p className="aida-txt">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo eveniet, exercitationem sapiente, totam natus id aspernatur explicabo rerum nulla vel vitae odit sed eligendi mollitia quos eius eum! Aspernatur quam odio debitis minima nam eum, consequatur provident animi dignissimos quae molestias adipisci. Magnam totam beatae aperiam sed deserunt sint! At eius dolore delectus temporibus! Aut, ullam. Nulla vero quasi dignissimos libero ea, amet porro nemo repellendus maiores deleniti a sequi eaque, labore odit adipisci corporis vitae soluta rem facilis doloribus, eum delectus? Deleniti corrupti vero quibusdam porro? Vitae quae amet perspiciatis accusamus, ea eos illum distinctio architecto delectus nemo.
            </p>
          </div> */}
          {messages.map((message, i)=>
             <div key={i} className={message.isBot? "main-chats-chat bot":"main-chats-chat"}>
            <img className='chat-img' src={message.isBot? aidaIcon:userIcon} alt="" />
            <p className="aida-txt">
             {message.text}
            </p>
          </div>
          )}
          <div ref={msgEnd}/>
        </div>
       
          <div className="chat-footer">
            <div className="user-input">
              <input type="text" placeholder ='Send a message' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>Disclaimer: I might have been hacked by a dastardly student. She may have schemed to get laughs. My information could be false</p>
          </div>
      </div>
      
    </div>
  )
}

export default Chat