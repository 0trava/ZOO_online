import React from 'react';
import style from './Testimonials.module.css';
import SliderTestimonials from 'components/elements/Slider testimonials/SliderTestimonials';

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      avatar: 'https://example.com/avatar1.jpg',
      title: 'Заголовок 1',
      text: 'Текст 1',
    },
    {
      id: 2,
      avatar: 'https://example.com/avatar2.jpg',
      title: 'Заголовок 2',
      text: 'Текст 2',
    },
    {
      id: 3,
      avatar: 'https://example.com/avatar3.jpg',
      title: 'Заголовок 3',
      text: 'Текст 3',
    },
    {
      id: 4,
      avatar: 'https://example.com/avatar4.jpg',
      title: 'Заголовок 4',
      text: 'Текст 4',
    },
    {
      id: 5,
      avatar: 'https://example.com/avatar5.jpg',
      title: 'Заголовок 5',
      text: 'Текст 5',
    },
  ];






  return (
    <div className={style.body}>
      <h2 className={style.title}>Testimonials</h2>

      {/* Slider */}
      <div>
        <SliderTestimonials reviews={reviews}/>

      </div>

      {/* button */}
      <button type='button' className={style.button}>
          <span className={style.btn_txt}>Leave feedback</span>
      </button>
    </div>
  )
}

export default Testimonials