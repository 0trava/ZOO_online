import React from 'react';
import style from './Map.module.css';

// images
import map from '../../images/svg/Map.svg'

const Map = () => {
  return (
    <div className={style.body}>
      <h2 className={style.title}>Map</h2>
      <img src={map} alt="images map" />
    </div>
  )
}

export default Map