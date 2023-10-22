import React from 'react';
import style from './PetsInZoo.module.css'
import SliderZoo from 'components/elements/Slider in zoo/SliderZoo';

const PetsInZoo = () => {
  const images = [
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9David-BenardAweso.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Thorsten-Scheel.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Gary-Brookshaw.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Robert-Cinega.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9Scott-SpaethAwesom.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9sergei-gladyshev-2.jpg',
    'https://static.fotogora.ru/fotogora/wysiwyg/wp-content/uploads/2013/11/%C2%A9sergei-gladyshev.jpg'
    // Add more image URLs here
  ];





  return (
    <div className={style.body}>
      <h2 className={style.title}>Pets in Zoo</h2>

      {/* Slider */}
      <SliderZoo images={images}/>


      {/* Button */}
      <button type='button' className={style.button}>
          <span className={style.btn_txt}>Choose your favorite</span>
      </button>

    </div>
  )
}

export default PetsInZoo