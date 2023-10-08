import React, { useEffect, useState } from 'react';
import style from './Header.module.css';

// Icon
import { AiOutlineClose } from 'react-icons/ai';

// Images
import LogoLight from '../../images/logo.png';
import LogoDark from '../../images/logoDark.png';
import ToggleTheme from 'components/elements/ToggleTeme/ToggleTheme';

const Header = () => {
  const them = localStorage.getItem('theme');
  const [logoTheme, setlogoTheme] = useState(them);
  const [burgerMenu, setBurgerMenu] = useState(false)

  useEffect(() => {

  }, [logoTheme])


  const checkForActive = (active) => {
    if (active === 1) {
      return style.link
    } else {
      return style.link_active
    }
  }

  // Modal
  const openBurgerMenu = () => {
    setBurgerMenu(true);
  }

  const closeBurgerMenu = () => {
    setBurgerMenu(false);
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

      <div className={style.right_part}>
      {/* Toogle switches */}
        <ToggleTheme setlogoTheme={setlogoTheme}/>
      
      {/* Burger button */}
      <div className={style.burger_btn} onClick={openBurgerMenu}>
        {them === "light" ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="21" viewBox="0 0 40 21" fill="none">
                <line y1="1.5" x2="40" y2="1.5" stroke="#333333" stroke-width="3"/>
                <line y1="10.5" x2="40" y2="10.5" stroke="#333333" stroke-width="3"/>
                <line x1="7" y1="19.5" x2="40" y2="19.5" stroke="#333333" stroke-width="3"/>
                </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="21" viewBox="0 0 40 21" fill="none">
                <line y1="1.5" x2="40" y2="1.5" stroke="#FEFEFE" stroke-width="3"/>
                <line y1="10.5" x2="40" y2="10.5" stroke="#FEFEFE" stroke-width="3"/>
                <line x1="7" y1="19.5" x2="40" y2="19.5" stroke="#FEFEFE" stroke-width="3"/>
                </svg>
          }
      </div>
      </div>


      {/*Burger menu  */}
      {burgerMenu ? 
            <div className={style.bacround_modal} onClick={closeBurgerMenu}>
            <div className={style.burger_menu}>
              <AiOutlineClose className={style.burger_btn_close} onClick={closeBurgerMenu}/>
              <a href="/" className={checkForActive(2)}>About</a>
              <a href="/" className={checkForActive(1)}>Zoos</a>
              <a href="/" className={checkForActive(1)}>Map</a>
              <a href="/" className={checkForActive(1)}>Contact Us</a>
              <a href="/" className={checkForActive(1)}>Design</a>
            </div>
            </div>
        : ""
      }

    </div>
  )
}

export default Header