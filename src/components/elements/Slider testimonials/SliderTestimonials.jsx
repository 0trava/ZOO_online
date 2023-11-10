import React, { useState } from 'react';
import style from './SliderTestimonials.module.css';
import {MdArrowBackIosNew}  from 'react-icons/md';
import {MdArrowForwardIos}  from 'react-icons/md';

// import icons
// import {GoPlay} from 'react-icons/go';
// import {BiDollarCircle} from 'react-icons/bi';

const SliderTestimonials = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = localStorage.getItem('theme');
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    if (currentIndex + 1 > reviews.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((currentIndex + 1) % reviews.length);
    }

  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };


  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const checkslide = (index) => {
    if (reviews[index]) {
      return index;
    } else {
      if (index > reviews.length) {
        return 0;
      } else {
        return 0;
      }
    }
  }


  return (
    <div className={style.carousel}>

      <div className={style.slider_box}>

        {/* Buttons next / previos arrow*/}
        <MdArrowBackIosNew className={style.arrow_prev} onClick={prevSlide}/>
        <MdArrowForwardIos className={style.arrow_next} onClick={nextSlide}/>




      {/* slide 1 */}
      <div className={`${style.slide} ${isAnimating ? style.slideAnimated : ''}`} onAnimationEnd={handleAnimationEnd}>
          <div className={style.avatar}>
            <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].title}/>
          </div>
          <h2>{reviews[currentIndex].title}</h2>
          <p>{reviews[currentIndex].text}</p>
        </div>


      {/* slide 2 */}
        <div  className={`${style.slide} ${isAnimating ? style.slideAnimated : ''}`} onAnimationEnd={handleAnimationEnd}>
          <div className={style.avatar}>
            <img src={reviews[checkslide(currentIndex + 1)].avatar} alt={reviews[checkslide(currentIndex + 1)].title}/>
          </div>
          <h2>{reviews[checkslide(currentIndex + 1)].title}</h2>
          <p>{reviews[checkslide(currentIndex + 1)].text}</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className={style.btn_box}>
      <p>0{currentIndex+1}/<span>0{reviews.length}</span></p>

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
        <rect x={(245/reviews.length) * currentIndex} width={245/reviews.length}  height="10" fill="#FEFEFE"/>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="245" height="10" viewBox="0 0 245 10" fill="none">
        <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
        <rect x={(245/reviews.length) * currentIndex} width={245/reviews.length} height="10"  fill="#333333"/>
        </svg>
        }
      </div>

      </div>
    </div>
  );
}

export default SliderTestimonials