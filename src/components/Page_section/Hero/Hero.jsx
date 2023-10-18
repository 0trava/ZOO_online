import React from 'react';
import style from './Hero.module.css';

// import icons
import {GoPlay} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import Slider from 'components/elements/Slider/Slider';


const Hero = () => {


  const images = [
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9David-BenardAweso.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Thorsten-Scheel.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Gary-Brookshaw.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Robert-Cinega.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Scott-SpaethAwesom.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9sergei-gladyshev-2.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9sergei-gladyshev.jpg'
    // Add more image URLs here
  ];





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
          <span className ={style.btn_txt}>Watch online</span>
        </button>

              {/* Gallery */}
          <div className={style.gallery}>
            <Slider images={images} />

          </div>
      </div>



    </div>
  )
}

export default Hero