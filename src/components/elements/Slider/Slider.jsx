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
      <button className={style.prev} onClick={prevSlide}>
        Previous
      </button>
      <button className={style.next} onClick={nextSlide}>
        Next
      </button>
      </div>
    </div>
  );
}

export default Slider