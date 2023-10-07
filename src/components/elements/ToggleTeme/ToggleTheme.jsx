import React, { useEffect, useState } from 'react';
import style from './ToggleTheme.module.css';

const ToggleTheme = () => {
  const [ theme, setTheme ] = useState("light");
  const them = localStorage.getItem('theme');

  useEffect (() => {
     setTheme(them);
     document.documentElement.setAttribute('data-theme', theme)
     // eslint-disable-next-line
  }, [])
 


  function handleClick() {

    // LIGHT
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.setAttribute('data-theme', "light")
      localStorage.setItem('theme', 'light');

    }
    // DADK
    else {
      setTheme("dark");
      document.documentElement.setAttribute('data-theme', "dark")
      localStorage.setItem('theme', 'dark');
    }

  }


  return (
        <div className={style.checkbox_apple} >
          <input className={style.yep} id="check-apple" type="checkbox" onClick={handleClick}/>
          <label for="check-apple"></label>
        </div>
  )
}

export default ToggleTheme