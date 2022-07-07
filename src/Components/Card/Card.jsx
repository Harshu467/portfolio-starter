import React from 'react'
import './Card.css'
const Card = ({emoji,heading,detail}) => {
  return (
    <div className='Card'>
      <img src={emoji} alt=''/>
      <span>{heading}</span>
      <span>{detail}</span>
      <a href='https://www.hackerrank.com/harshupadhye2832' ><button className="c-button">LEARN MORE</button></a>
    </div>
  )
}

export default Card
