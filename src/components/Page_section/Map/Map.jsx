import React from 'react';
import style from './Map.module.css';

// images
import map from '../../images/svg/Map.svg'

// import icons
import {GoPlay} from 'react-icons/go';

const Map = () => {
  return (
    <div className={style.body}>
      <h2 className={style.title}>Map</h2>
      <img src={map} alt="images map" />

      {/* button */}
      <button type='button' className={style.button}>
          <GoPlay className={style.button_span}/>
          <span class="btn-txt">watch online</span>
        </button>
    </div>
  )
}

export default Map