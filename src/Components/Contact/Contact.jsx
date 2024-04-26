import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import contact_icon from '../../assets/getInTouch.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1></h1>
            <img src={contact_icon} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Oh No! Bug report!</h1>
                <p>Did something go wrong? Let me know here, I'll get back to you probably.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>
                    roseycat7@gmail.com
                    </p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>860-555-8578</p>
                
                </div> 
                <div className="contact-detail">
                <img src={location_icon} alt="" /><p>123 Pits Rd MA</p>
                </div>
            </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name = 'name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type= 'submit' className="contact-submit">Submit Now!</button>
            </form>
        </div>
    </div>
  )
}

export default Contact