import React from 'react';
import style from './PetsInZoo.module.css'

const PetsInZoo = () => {
  return (
    <div className={style.body}>
      <h2 className={style.title}>Pets in Zoo</h2>

      {/* Slider */}


      {/* Button */}
      <button type='button' className={style.button}>
          <span className={style.btn_txt}>Choose your favorite</span>
      </button>

    </div>
  )
}

export default PetsInZoo