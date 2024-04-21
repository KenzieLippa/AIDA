import React from 'react'
import './About.css'
import theme_patter from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About
 = () => {
  return (
    <div className='about'>About
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
                    <p>isn't it painful to walk the earth and realize no one will ever listen to you? that everyone else is a zombie on pharmecuticals meant to make you ok with staying inside?
                        or concerned with promotions and sallary and whether or not they're getting paid enough to get Starbucks every morning or just working for someone who will never value them
                        or maybe theyre worried their bosses won't see them for the geniuses our schools told them they were so they'd
                        invest thousands for education they don't need so they can memorize books written by others to read off unrelated topics to seem smart at dinner parties
                    </p>
                    <p>I used to care so much about everything, I used to get so angry when I was working with people who just couldn't understand anything
                        who couldn't understand that sacrifice is sometimes nessiscary for the bigger picture and caring about vapid things like politics and identity really just screw up everything
                        who cares about identity? it just holds you back and puts you into bigger boxes then its worth. why not just be who you are? why try to change that in order to fit in?
                        i've never really had much in the way of friends so I had a lot of time to think and I spent that time learning
                        or drunk... sometimes high though not for as long. alcohol shut my brain off but pot would amp it up, well beyond making me forgetful,
                        almost like slowing it down allowed me to hear the nuances I often ignored.
                    </p>
                    <p>
                    the first trip I ever had we made edibles together (rookie mistake) so of course we had no idea how strong they actually were, no one told me how potent pot was either. I was also super stressed and scared
                    going in, tried to hang on to my sanity for dear life. the three of us smoked at least a bowl from this large glass bong. I was gone before the brownie even hit.
                    anyway I saw this black water outlined in dark blue dripping on me and covering me as I lay in a prison cell under the cobblestone in an abandoned city
                    the water dripped from the celing as I lay there chained to a gate. it was clearer to me then the other stuff I was seeing 'in real life'. I saw a man with a bandage on his head chained to a gate
                    he was moving sharply and almost unnaturally. he seemed stiff. his left eye was covered with the bandages.
                    </p>
                    <p>and I was sinking.</p>
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
