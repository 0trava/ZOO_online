import React, { useState } from 'react';
import style from './Slider.module.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={style.carousel}>

      <div className={style.slider_box}>
        <div className={style.point}></div>
      {/* slide -1 */}
      <div className={style.slide}>
        <img src={images[currentIndex - 1]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide General */}
      <div className={style.slide_general}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide +1 */}
      <div className={style.slide}>
        <img src={images[currentIndex + 1]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide +2 */}
      <div className={style.slide}>
        <img src={images[currentIndex + 2]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* slide +3 */}
      <div className={style.slide}>
        <img src={images[currentIndex + 3]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      </div>

      
      <div className={style.btn_box}>
      <p>{currentIndex+1}/<span>{images.length+1}</span></p>

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