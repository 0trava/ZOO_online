import React from 'react';
import style from './Hero.module.css';

// import icons
import {GoPlay} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';


const Hero = () => {
  return (
    <div className={style.body}>
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

      {/* Content */}
      <div className={style.content}>
        <h1 hidden>Zoo online</h1>
        <h2 className={style.title}>Watch your favorite animal online</h2>

        <button type='button' className={style.button}>
          <GoPlay className={style.button_span}/>
          <span class="btn-txt">watch online</span>
        </button>
      </div>

      {/* Gallery */}
      <div className={style.gallery}>

      </div>

    </div>
  )
}

export default Hero