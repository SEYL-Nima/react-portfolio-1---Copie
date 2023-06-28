import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Can I Do For You</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Network Analysis</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GiCheckMark className='service__list-icon'/>
              <p>VPN</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Active Directory with Database</p>
            </li> <li>
              <GiCheckMark className='service__list-icon'/>
              <p>FireWall</p>
            </li> <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Routers Configuration</p>
            </li>
            
          </ul>
        </article>
        {/*END OF NETWORK ANALYSIS*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <GiCheckMark className='service__list-icon'/>
              <p> Web-Based Solution</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Portfolio</p>
            </li> <li>
              <GiCheckMark className='service__list-icon'/>
              <p>DataBase</p>
            </li> <li>
              <GiCheckMark className='service__list-icon'/>
              <p>UI/UX Design</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services