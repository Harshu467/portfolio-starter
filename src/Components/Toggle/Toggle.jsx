import React from 'react'
import './Toggle.css'
// import { useContext } from 'react'
// import { themeContext } from '../../Context'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
const Toggle = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    // const handleClick = () => {
    //     theme.dispatch({ type: "toggle" });
    //   };
  return (
    <div className='Toggle'>
      <Moon/>
      <Sun/>
      <div className="t-button">
      </div>
    </div>
  )
}

export default Toggle
