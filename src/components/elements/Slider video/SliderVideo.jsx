import React, { useState } from 'react';
import style from './SliderVideo.module.css';

const SliderVideo = ({ video }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % video.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + video.length) % video.length);
  };

  // const checkslide = (index) => {
  //   if (images[currentIndex - index]) {
  //     return images[currentIndex - index]
  //   } else {
  //     if (index > 0) {
  //       return images[images.length - index];
  //     } else {
  //       return images[0 - index];
  //     }
  //   }
  // }

  return (
    <div className={style.carousel}>
      <div className={style.slider_box}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video[currentIndex]}?&autoplay=1&mute=1&showinfo=0&modestbranding=1&controls=0&rel=0`}
        title='animal'
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      
      </div>

      {/* BUTTONS */}
      <div className={style.btn_box}>
        <p>
          0{currentIndex + 1}/<span>0{video.length}</span>
        </p>

        <div className={style.scroll}>
          <div>
            <button className={style.prev} onClick={prevSlide}>
              Previous
            </button>
            <button className={style.next} onClick={nextSlide}>
              Next
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="245"
            height="10"
            viewBox="0 0 245 10"
            fill="none"
          >
            <rect
              y="3"
              width="245"
              height="5"
              fill="#BDBDBD"
              fill-opacity="0.57"
            />
            <rect
              x={currentIndex * 30}
              width={video.length * 4}
              height="10"
              fill="#FEFEFE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SliderVideo;
