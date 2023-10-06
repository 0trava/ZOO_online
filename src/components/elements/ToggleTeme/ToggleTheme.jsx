import React, { useState } from 'react';
import style from './ToggleTheme.module.css';

const ToggleTheme = () => {
  const [ theme, setTheme ] = useState(false);

  function handleClick() {

    // LIGHT
    if (theme === true) {
      setTheme(false);
      document.documentElement.setAttribute('data-theme', "light")

    }
    // DADK
    else {
      setTheme(true);
      document.documentElement.setAttribute('data-theme', "dark")

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