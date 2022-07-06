import React from 'react'
import './Works.css'
import amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'
import Upwork from '../../img/Upwork.png'
import Shopify from '../../img/Shopify.png'
import fiverr from '../../img/fiverr.png'
const Works = () => {
  return (
    <div className='Works'>
      <div className="w-left">
        <span>Works for All this</span>
        <span>Brands & Clients</span>
        <span> am Front-End designer and developer.
          <br />Please have a seat, scroll down and I will get you coffee
          <br />Please have a seat, scroll down and I will get you coffee</span>
        <button className="button s-button">Hire Me</button>
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
            <img src={amazon} alt='' />
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