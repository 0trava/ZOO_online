import React from 'react';
import style from './Header.module.css';

// Images
import LogoLight from '../../images/logo.png';
import LogoDark from '../../images/logoDark.png';

import ToggleTheme from 'components/elements/ToggleTeme/ToggleTheme';

const Header = () => {
  const them = localStorage.getItem('theme');


  const checkForActive = (active) => {
    if (active === 1) {
      return style.link
    } else {
      return style.link_active
    }
  }


  return (
    <div className={style.body}>
      {/* Logo */}
      <div>
        {them === "light" ? 
        <img className={style.logo} src={LogoLight} alt="logo" />
        : <img className={style.logo} src={LogoDark} alt="logo" />
        }
        
      </div>

      {/* Link */}
      <div className={style.link_block}>
        <a href="/" className={checkForActive(2)}>About</a>
        <a href="/" className={checkForActive(1)}>Zoos</a>
        <a href="/" className={checkForActive(1)}>Map</a>
        <a href="/" className={checkForActive(1)}>Contact Us</a>
        <a href="/" className={checkForActive(1)}>Design</a>
      </div>


      {/* Toogle switches */}
        <ToggleTheme/>
    </div>
  )
}

export default Header