import React from 'react'
import './Works.css'
import sql from '../../img/sql.png'
import java from '../../img/java.png'
import RT from '../../img/RT.png'
import Aws from '../../img/Aws.png'
import python from '../../img/python.png'
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
            <a href='https://drive.google.com/file/d/1NdkJR-VUEOMQtNemk9deYu2cxZjS1iXr/view'><img style={{ transform: 'scale(0.4' }} src={Aws} alt='' /></a>
          </div>
          <div className="scircle">
            <a href='https://www.hackerrank.com/certificates/9e836e08703f' > <img style={{ transform: 'scale(0.5)' }} src={sql} alt='' /></a>
          </div>
          <div className="scircle">
            <a href='https://www.hackerrank.com/certificates/10c1d4253157' ><img style={{ transform: 'scale(0.4' }} src={RT} alt='' /></a>
          </div>
          <div className="scircle">
            <a href='https://www.hackerrank.com/certificates/7b16e32d884c'><img style={{ transform: 'scale(0.4' }} src={python} alt='' /></a>
          </div>
          <div className="scircle">
            <a href='https://www.hackerrank.com/certificates/605ca5ca2a18'>  <img style={{ transform: 'scale(0.4' }} src={java} alt='' /></a>
          </div>
        </div>
        <div className='w-backcircle bluecircle'></div>
        <div className='w-backcircle yellowcircle'></div>
      </div>
    </div>
  )
}

export default Works