import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
const Services = () => {
  return (
    <div className='Services' id='Services'>
      <div className="left">
        <span>Harsh Upadhye's</span>
        <span>Skills</span>
        <span> I give you best design and best product.
          <br />I give product within a given time and with cheap price.</span>
          <a href={Resume} download>
        <button className="button s-button">Download CV</button></a>
      </div>

      <div className="right">
        <div className="card" >
          <div style={{ marginTop:'-1rem',marginLeft: '10rem' }}>
            <Card
              heading='Design'
              detail='CSS , BootStrap ' />
          </div>
          <div style={{ marginTop: '3rem', marginLeft: '-4rem' }}>
            <Card
              heading='Developer'
              detail='C , CPP , Python' />
          </div>
          <div style={{ marginTop: '-15rem', marginLeft: '18rem' }}>
            <Card
              heading='UI/UX'
              detail='HTML ,JavaScript , React' />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
