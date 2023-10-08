import React from 'react';
import style from './Benefits.module.css';

// import images
import img1 from '../../images/svg/problem-solving.svg';
import img2 from '../../images/svg/achievement.svg';
import img3 from '../../images/svg/love.svg';

const Benefits = () => {
  return (
    <div className={style.body}>
      <div className={style.benefit}>
        <img src={img1} alt="icon problem-solving" />
        <h3>What inspires us?</h3>
        <p>
          As a voice for wildlife, we are devastated by the impact of the 2020
          Australian bushfires on precious species and their habitat, and we are
          determined to assist in all aspects, including providing veterinary
          support and raising much-needed emergency funds.
        </p>
      </div>
      <div className={style.benefit}>
        <img src={img2} alt="icon Our mission" />
        <h3>Our mission</h3>
        <p>
          Zoo Online saves wildlife and inspires everyone to make conservation a
          priority in their lives.
        </p>
      </div>
      <div className={style.benefit}>
        <img src={img3} alt="icon hand love" />
        <h3>What we believe in?</h3>
        <p>
          Animals have the right to a pain-free and happy life. They have equal
          claim to the resources of this planet, and deserve a life of dignity
          and compassion.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
