import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
      <div className="n-name">Harsh Upadhye</div>
      <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyle:'none'}}>
                <li id='#'>Home</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>About</li>
            </ul>
        </div>
        <button className="button n-button">
            Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar
