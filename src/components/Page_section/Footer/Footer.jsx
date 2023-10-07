import React from 'react';
import style from './Footer.module.css';

// images
import logo from '../../images/logo.svg'

// import icons
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={style.body}>
      {/* BLOCK - 1 */}
      <div >

        <div className={style.block_first}>
          <img className={style.logo} src={logo} alt="logo" />
        </div>

        <h3 className={style.title}>Contact us</h3>
      </div>


      {/* BLOCK - 2 */}
      <div className={style.block_second}>
            <div>
             {/* Link */}
            <div className={style.link_block}>
              <a href="/" className={style.link}>About</a>
              <a href="/" className={style.link}>Zoos</a>
              <a href="/" className={style.link}>Map</a>
              <a href="/" className={style.link}>Design</a>
            </div>


              <h3 className={style.title}>ZOO Online Centre</h3>

              <div className={style.text_block}>
                <p>132, Address District, Street</p>
                <p>Open Daily 10:00 am - 5:00 pm</p>
              </div>
              <div className={style.text_block}>
                <p>T(702) 163-3433</p>
                <p>zoo.online@gmail.com</p>
              </div>

              {/* Social link */}
              <div className={style.social_block}>
                <a href="./">
                <FaInstagram className={style.social_link}/>
                </a>
                <a href="./">
                <FaTwitter className={style.social_link}/>
                </a>
                <a href="./">
                <FaYoutube  className={style.social_link}/>
                </a>
                <a href="./">
                <FaFacebookSquare  className={style.social_link}/>
                </a>       
              </div>

           </div>

          {/* BLOCK - 2/2 */}
          <div>
            {/* button */}
            <button type='button' className={style.button}>
              <span className={style.btn_txt}>donate for volunteers</span>
            </button>
          </div>
        </div>



    </div>
  )
}

export default Footer