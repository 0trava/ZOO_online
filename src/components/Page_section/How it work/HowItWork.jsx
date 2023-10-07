import React from 'react';
import style from './HowItWork.module.css'

// import icons
import {GoPlay} from 'react-icons/go';

const HowItWork = () => {
  return (
    <div className={style.body}>
      <div>
      <h2 className={style.title}>How it works?</h2>
      <p className={style.text}>
        As a voice for wildlife, we are devastated by the impact of the 2020
        Australian bushfires on precious species and their habitat, and we are
        determined to assist in all aspects, including providing veterinary
        support and raising much-needed emergency funds. Zoo Online saves
        wildlife and inspires everyone to make conservation a priority in their
        lives. Animals have the right to a pain-free and happy life. They have
        equal claim to the resources of this planet, and deserve a life of
        dignity and compassion.As a voice for wildlife, we are devastated by the
        impact of the 2020 Australian bushfires on precious species and their
        habitat.
      </p>
      </div>
      {/* Slider */}
      <div>

      </div>
      {/* Button */}
      <button type='button' className={style.button}>
          <GoPlay className={style.button_span}/>
          <span  className ={style.btn_txt}>watch online</span>
        </button>

    </div>
  );
};

export default HowItWork;
