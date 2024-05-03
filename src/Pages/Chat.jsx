import React from 'react'
import './Chat.css'
import aida from '../assets/HippiePortrait.png'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
import sendBtn from '../assets/send.svg'
import userIcon from '../assets/profile_icon.png'
import aidaIcon from '../assets/HippiePortrait.png'

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
          <div className="main-chats-chat">
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
          </div>
        </div>
       
          <div className="chat-footer">
            <div className="user-input">
              <input type="text" placeholder ='Send a message' /> <button className="send"><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>Disclaimer: I might have been hacked by a dastardly student. She may have schemed to get laughs. My information could be false</p>
          </div>
      </div>
      
    </div>
  )
}

export default Chat