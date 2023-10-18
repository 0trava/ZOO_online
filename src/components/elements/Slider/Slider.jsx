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
      <button className={style.prev} onClick={prevSlide}>
        Previous
      </button>
      <div className={style.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className={style.next} onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slider