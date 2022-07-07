import React from 'react'
import './Card.css'
const Card = ({heading,detail}) => {
  return (
    <div className='Card'>
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  )
}

export default Card
