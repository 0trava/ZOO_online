import React from 'react';
import style from './Testimonials.module.css';
import SliderTestimonials from 'components/elements/Slider testimonials/SliderTestimonials';

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      avatar: 'https://s16.stc.yc.kpcdn.net/share/i/12/12779372/wr-960.webp',
      title: 'Nastya Sidorova',
      text: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.',
    },
    {
      id: 2,
      avatar: 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png',
      title: 'Vlad Kim',
      text: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.',
    },
    {
      id: 3,
      avatar: 'https://i.work.ua/article/1516b.jpg',
      title: 'Svetlana Lytvyn',
      text: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.',
    },
    {
      id: 4,
      avatar: 'https://bigpicture.ru/wp-content/uploads/2016/05/main12.jpg',
      title: 'Cim Chi',
      text: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.',
    },
    {
      id: 5,
      avatar: 'https://img.freepik.com/free-photo/selfie-portrait-for-videocall_23-2149186161.jpg',
      title: 'Dely Mon',
      text: 'As a voice for wildlife, we are devastated by the impact of the 2020 Australian bushfires on precious species and their habitat.',
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