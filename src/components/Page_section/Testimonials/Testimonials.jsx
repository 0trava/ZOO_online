import React from 'react';
import style from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={style.body}>
      <h2 className={style.title}>Testimonials</h2>

      {/* Slider */}
      <div>

      </div>

      {/* button */}
      <button type='button' className={style.button}>
          <span className={style.btn_txt}>Leave feedback</span>
      </button>
    </div>
  )
}

export default Testimonials