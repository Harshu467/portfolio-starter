import React from 'react'
import './Services.css'
import Heart from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import glasses from '../../img/glasses.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
const Services = () => {
  return (
    <div className='Services'>
      <div className="left">
        <span>Harsh's</span>
        <span>Services</span>
        <span> am Front-End designer and developer.
          <br />Please have a seat, scroll down and I will get you coffee</span>
          <a href={Resume} download>
        <button className="button s-button">Download CV</button></a>
      </div>

      <div className="right">
        <div className="card" >
          <div style={{ marginTop:'-1rem',marginLeft: '10rem' }}>
            <Card
              emoji={Heart}
              heading='Design'
              detail='CSS , React , HTML ' />
          </div>
          <div style={{ marginTop: '3rem', marginLeft: '-4rem' }}>
            <Card
              emoji={glasses}
              heading='Developer'
              detail='HTML , CSS ,JavaScript , React' />
          </div>
          <div style={{ marginTop: '-15rem', marginLeft: '18rem' }}>
            <Card
              emoji={humble}
              heading='UI/UX'
              detail='AAA style left' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
