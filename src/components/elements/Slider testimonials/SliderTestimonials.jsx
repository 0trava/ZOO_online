import React, { useState } from 'react';
import style from './SliderTestimonials.module.css';

// import icons
// import {GoPlay} from 'react-icons/go';
// import {BiDollarCircle} from 'react-icons/bi';

const SliderTestimonials = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = localStorage.getItem('theme');

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };


  return (
    <div className={style.carousel}>

      <div className={style.slider_box}>
        <div className={style.point}></div>
      {/* slide General */}
      {reviews.map((slide, index) => (
        <div key={slide.id} className={style.slide}>
          <div className={style.avatar}>
            <img src={slide.avatar} alt={slide.title}/>
          </div>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </div>
      )) }
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