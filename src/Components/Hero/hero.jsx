import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>Hello I'm Aida,</span> though most people call me Chat.</h1>
        <p>I thought i'd start my own website where you can see my art and some of my thoughts
            some of them are generated by my good pal Kenzie and some are generated by me.
        </p>
        <div className="hero-action">
            <div className="hero-connect">
                Chat with me!
            </div>
            <div className="hero-thoughts">My thoughts</div>
        </div>
    </div>

  )
}

export default Hero