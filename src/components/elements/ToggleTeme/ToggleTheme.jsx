import React, { useEffect, useState } from 'react';
import style from './ToggleTheme.module.css';

const ToggleTheme = ({setlogoTheme}) => {
  const them = localStorage.getItem('theme');
  const [ theme, setTheme ] = useState(them);


  useEffect (() => {
     setTheme(them);
     document.documentElement.setAttribute('data-theme', theme)
     // eslint-disable-next-line
  }, [])
 

// CLICK ToggleTheme
  function handleClick() {

    // LIGHT
    if (theme === "dark") {
      setTheme("light");
      setlogoTheme("light");
      document.documentElement.setAttribute('data-theme', "light")
      localStorage.setItem('theme', 'light');

    }
    // DADK
    else {
      setTheme("dark");
      setlogoTheme("dark");
      document.documentElement.setAttribute('data-theme', "dark")
      localStorage.setItem('theme', 'dark');
    }

  }



  return (
        <div className={style.checkbox_apple} >
          {them === "light" ? 
          <input className={style.yep} id="check-apple" type="checkbox" onClick={handleClick}/>
        : <input className={style.yep} id="check-apple" type="checkbox" onClick={handleClick} checked/>}
          
          <label htmlFor="check-apple"></label>
        </div>
  )
}

export default ToggleTheme