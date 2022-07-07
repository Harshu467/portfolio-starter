import React from 'react'
import './Works.css'
import Facebook from '../../img/Facebook.png'
import Upwork from '../../img/Upwork.png'
import Shopify from '../../img/Shopify.png'
import fiverr from '../../img/fiverr.png'
import RT from '../../img/RT.png'
import { Link } from 'react-scroll'
const Works = () => {
  return (
    <div className='Works'>
      <div className="w-left">
        <span>Harsh Upadhye's</span>
        <span>Certificates</span>
        <Link to="Contact" smooth={true} spy={true} >
        <button className="button s-button">Hire Me</button></Link>
      </div>
      <div className="w-right">
        <div className="w-mcircle">
          <div className="scircle">
            <img src={Upwork} alt='' />
          </div>
          <div className="scircle">
            <img src={fiverr} alt='' />
          </div>
          <div className="scircle">
           <a href='https://www.hackerrank.com/certificates/10c1d4253157' ><img style={{transform:'scale(0.6'}} src={RT} alt='' /></a>
          </div>
          <div className="scircle">
            <img src={Shopify} alt='' />
          </div>
          <div className="scircle">
            <img src={Facebook} alt='' />
          </div>
        </div>
        <div className='w-backcircle bluecircle'></div>
        <div className='w-backcircle yellowcircle'></div>
      </div>
    </div>
  )
}

export default Works