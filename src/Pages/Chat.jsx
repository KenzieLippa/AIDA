import React from 'react'
import './Chat.css'
import aida from '../assets/HippieLogo.png'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'

const Chat = () => {
  return (
    <div className='GPT'>
      <div className="sidebar">
        <div className="upper-side">
          <div className="upper-side-image"><img src={aida} alt="Aida" className='logo'/> <span className='brand'>AIDA</span></div>
           
            <button className="newChat">
              <img src={addBtn} alt="" className="addBtn" />New Chat
            </button>
            <div className="chat-logs">
              <button className="chat">
                <img src={msgIcon} alt="chat" className="chat-image" /> <p className="chat-title"> What is the meaning of life?</p>
              </button>
              <button className="chat">
                <img src={msgIcon} alt="chat" className="chat-image" /><p className="chat-title">Finishing hw and studying</p>
              </button>
            
             </div>
         </div>
        <div className="lower-side">
          <div className="list-items"><img src={home} alt="" />Home</div>
          <div className="list-items"><img src={saved} alt="" />Saved</div>
          {/* could add another lower down if i want ect... */}
        </div>
      </div>
      <div className="main">

      </div>
      
    </div>
  )
}

export default Chat