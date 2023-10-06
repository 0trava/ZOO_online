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

          <h3 className={style.title}>Contact us</h3>
        </div>

        <div>
           <h3 className={style.title}>ZOO Online Centre</h3>

           <p>132, Address District, Street</p>
           <p>Open Daily 10:00 am - 5:00 pm</p>

           <p>T(702) 163-3433</p>
           <p>zoo.online@gmail.com</p>

           <div>srfeqr</div>
           <p>wqe</p>

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