import React from 'react'
// import { themeContext } from '../../Context';
import './Experience.css'
const Experience = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className='Experience'>
        <div className="achievement">
            <div className="circle">1+
            </div>
            <span >Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" >5+
            </div>
            <span >Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" >1+
            </div>
            <span >Years</span>
            <span>Experience</span>
        </div>
    </div>
  )
}

export default Experience
