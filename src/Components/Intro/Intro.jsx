import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instragram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'
import boy from '../../img/boy.png'
import crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import glassesemoji from '../../img/glassesimoji.png'
const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>My Name is</span>
                <span>Harsh Upadhye</span>
                <span>I am Front-End designer and developer. Please have a seat, scroll down and I will get you coffee </span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a rel='noreferrer' href='https://instagram.com/harshup_28' target='_blank' ><img src={instragram} alt='Instagram' /></a>
                <a rel='noreferrer' href='https://www.linkedin.com/in/harsh-upadhye-b0269a213/' target='_blank' ><img src={linkedin} alt='LinkedIn' /></a>
                <a rel='noreferrer' href='https://github.com/Harshu467/Harshu467' target='_blank' ><img src={github} alt='Github' /></a>
                <a rel='noreferrer' href='https://twitter.com/28_harshupadhye?s=09'target='_blank'><img src={twitter} alt='Twitter'/></a>
            </div>
        </div>
        <div className="i-right">
            <img src={boy} alt='' />
            <img style={{ transform:'scale(0.9)', position:'absolute',marginTop:'-2.4rem',marginLeft:'-25rem'}} src={glassesemoji} alt=''/>
            <div style={{ position:'absolute',marginTop:'-2.4rem',marginLeft:'1.2rem'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div  style={{position:'absolute',marginTop:'-20rem',marginLeft:'20rem'}}>
                <FloatingDiv image={thumbup} txt1='Best' txt2='Design'/>
            </div>
        </div>
    </div>
  )
}
export default Intro
