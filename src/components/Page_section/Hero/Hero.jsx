import React from 'react';
import style from './Hero.module.css';

// import icons
import {GoPlay} from 'react-icons/go';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import Slider from 'components/elements/Slider hero/Slider';


const Hero = () => {


  const images = [
    'https://storage.googleapis.com/pod_public/1300/83659.jpg',
    'https://kyiv24.news/wp-content/uploads/2023/02/photo_2023-02-02_14-45-56-768x768.jpg',
    'https://i.pinimg.com/564x/0a/ac/73/0aac7316e5aabf7f05710be4d009e14f.jpg',
    'https://i.pinimg.com/564x/8d/96/91/8d969183a46442799ad642821b3b67c7.jpg',
    'https://i.pinimg.com/564x/0a/65/c6/0a65c6663e5b93a9fa05227b5ef3c52e.jpg',
    'https://i.pinimg.com/564x/39/7b/c2/397bc2a1b0e85cd321a9aee41592d992.jpg',
    'https://i.pinimg.com/564x/55/0d/90/550d90ff3af6434a85eb09a5bf057cad.jpg'
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