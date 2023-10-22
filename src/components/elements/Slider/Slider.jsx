import React, { useState } from 'react';
import style from './Slider.module.css';

// import icons
import {GoPlay} from 'react-icons/go';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const checkslide = (index) => {
    if (images[currentIndex - index]) {
      return images[currentIndex - index]
    } else {
      if (index > 0) {
        return images[images.length - index];
      } else {
        return images[0 - index];
      }
    }
  }

  return (
    <div className={style.carousel}>

      <div className={style.slider_box}>
        <div className={style.point}></div>
      {/* slide -1 */}
      <div className={style.slide}>
        <img src={checkslide(1)} alt={`Slide ${currentIndex - 1}`} />
      </div>
      {/* slide General */}
      <div className={style.slide_general}>
        <img src={checkslide(0)} alt={`Slide ${currentIndex}`} />
        <p className={style.slide_general_text}>Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
        <button className={style.slide_general_btn_watch} type='button'>
          <span><GoPlay/></span>
          Watch online
        </button>
        <button className={style.slide_general_btn_donate} type='button'>
          <span><GoPlay/></span>
          Donate
        </button>
      </div>
      {/* slide +1 */}
      <div className={style.slide}>
        <img src={checkslide(-1)} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide +2 */}
      <div className={style.slide}>
        <img src={checkslide(-2)} alt={`Slide ${currentIndex + 2}`} />
      </div>
      {/* slide +3 */}
      <div className={style.slide}>
        <img src={checkslide(-3)} alt={`Slide ${currentIndex + 3}`} />
      </div>
      </div>

      {/* BUTTONS */}
      <div className={style.btn_box}>
      <p>0{currentIndex+1}/<span>0{images.length+1}</span></p>

      <div className={style.scroll}>
        <div>
        <button className={style.prev} onClick={prevSlide}>
        Previous
      </button>
      <button className={style.next} onClick={nextSlide}>
        Next
      </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="245" height="10" viewBox="0 0 245 10" fill="none">
        <rect y="3" width="245" height="5" fill="#BDBDBD" fill-opacity="0.57"/>
        <rect x={currentIndex*30} width={images.length * 4} height="10" fill="#FEFEFE"/>
        </svg>
      </div>

      </div>
    </div>
  );
}

export default Slider