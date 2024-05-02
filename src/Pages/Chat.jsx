import React from 'react'
import './Chat.css'
import aida from '../assets/HippieLogo.png'

const Chat = () => {
  return (
    <div className='GPT'>
      <div className="sidebar">
        <div className="upper-side">
          <div className="upper-side-image"><img src={aida} alt="" /> <span className='Brand'>AIDA</span></div>
           
            <button className="newChat">
              <img src="" alt="" className="add" />New Chat
            </button>
            <div className="chat-logs">
              <button className="chat">
                <img src="" alt="" className="chat-image" /> What is the meaning of life?
              </button>
              <button className="chat">
                <img src="" alt="" className="chat-image" /> What is the meaning of life?
              </button>
            
          </div>
        </div>
        <div className="lower-side">

        </div>
      </div>
      <div className="main">

      </div>
      
      </div>
  )
}

export default Chat