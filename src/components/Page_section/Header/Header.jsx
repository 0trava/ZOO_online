import React from 'react';
import style from './Header.module.css';
import Logo from '../../images/logo.png'

const Header = () => {


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
        <img className={style.logo}src={Logo} alt="logo" />
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
      <div className={style.checkbox_apple}>
        <input className={style.yep} id="check-apple" type="checkbox"/>
        <label for="check-apple"></label>
      </div>
    </div>
  )
}

export default Header