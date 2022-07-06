import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width:"100%"}}/>
        <div className="f-content">
            <span>harshupadhye39@gmail.com</span>
            <div className="f-icons">
                <Instagram color="white" size={"3rem"}/>
                <Twitter color="white" size={"3rem"}/>
                <Linkedin color="white" size={"3rem"}/>
                <Github color="white" size={"3rem"}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
