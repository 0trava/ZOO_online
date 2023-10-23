import React, { useState } from 'react';
import style from './SliderZoo.module.css';

// import icons
import {GoPlay} from 'react-icons/go';
import {BiDollarCircle} from 'react-icons/bi';

const SliderTestimonials = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = localStorage.getItem('theme');

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const checkslide = (index) => {
    if (reviews[currentIndex + index]) {
      return reviews[currentIndex + index];
    } else {
      return reviews[-1 + index];
    }
  }


  return (
    <div className={style.carousel}>

      <div className={style.slider_box}>
        <div className={style.point}></div>
      {/* slide General */}
      <div className={style.slide_general}>
        <img src={checkslide(0)} alt={`Slide ${currentIndex}`} />
        <p className={style.slide_general_text}>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
        <button className={style.slide_general_btn_watch} type='button'>
          <span><GoPlay/></span>
          Watch online
        </button>
        <button className={style.slide_general_btn_donate} type='button'>
          <span><BiDollarCircle/></span>
          Donate
        </button>
      </div>
      {/* slide +1 */}
      <div className={style.slide}>
        <img src={checkslide(1)} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide +2 */}
      <div className={style.slide}>
        <img src={checkslide(2)} alt={`Slide ${currentIndex + 2}`} />
      </div>
      {/* slide +3 */}
      <div className={style.slide}>
        <img src={checkslide(3)} alt={`Slide ${currentIndex + 3}`} />
      </div>
      </div>

      {/* BUTTONS */}
      <div className={style.btn_box}>
      <p>0{currentIndex+1}/<span>0{images.length}</span></p>

      <div className={style.scroll}>
        <div>
        <button className={style.prev} onClick={prevSlide}>
        Previous
      </button>
      <button className={style.next} onClick={nextSlide}>
        Next
      </button>
        </div>
        {(theme === "dark")?
        <svg xmlns="http://www.w3.org/2000/svg" width="245" height="10" viewBox="0 0 245 10" fill="none">
        <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
        <rect x={(245/images.length) * currentIndex} width={245/images.length}  height="10" fill="#FEFEFE"/>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="245" height="10" viewBox="0 0 245 10" fill="none">
        <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
        <rect x={(245/images.length) * currentIndex} width={245/images.length} height="10"  fill="#333333"/>
        </svg>
        }
      </div>

      </div>
    </div>
  );
}

export default SliderTestimonials