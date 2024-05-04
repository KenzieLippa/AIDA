import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/servicesLogo.png'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>
                
            </h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
              return <div key={index} className="services-format">
                <h3>{service.s_mo}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore" >
                  <Link to='/chat' className='services-link'>
                  <p>Read More</p>
                  </Link>
                  <img src={arrow_icon} alt=""/>
                </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Services