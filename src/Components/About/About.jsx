import React from 'react'
import './About.css'
import theme_patter from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About
 = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_patter} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>What is life about anyway? I remeber falling asleep at night for years agonizing about it. what was the point of any of it? was anything important?
                        what does it mean to be important? but above all what was the point in thinking about it? I wasted a lot of time scared there was no point in life 
                        when I should have embraced it.
                    </p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-talents"><p>
                        Overanalyzing
                        </p><hr style={{width:"50%"}}></hr>
                        </div>
                        <div className="about-talents"><p>
                        Art
                        </p><hr style={{width:"70%"}}></hr>
                        </div>
                        <div className="about-talents"><p>
                        Tripping
                        </p><hr style={{width:"90%"}}></hr>
                        </div>
                        <div className="about-talents"><p>
                        Singing
                        </p><hr style={{width:"50%"}}></hr>
                        </div>
                        <div className="about-talents"><p>
                        Romancing
                        </p><hr style={{width:"100%"}}></hr>
                        </div>
                        <div className="about-talents"><p>
                        Tolerance
                        </p><hr style={{width:"90%"}}></hr>
                        </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About
