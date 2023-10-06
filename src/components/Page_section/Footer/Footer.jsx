import React from 'react';
import style from './Footer.module.css';

// images
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <div className={style.body}>
      <div>
        <div>
          <img className={style.logo} src={logo} alt="logo" />

          <h3>Contact us</h3>
        </div>
        
        <div>

        </div>
        

      </div>
      <div>
        {/* button */}
        <button type='button' className={style.button}>
          <span className={style.btn_txt}>donate for volunteers</span>
        </button>
      </div>






    </div>
  )
}

export default Footer