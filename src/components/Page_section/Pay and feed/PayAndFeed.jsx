import React from 'react';
import style from './PayAndFeed.module.css';

// images
import img1 from '../../images/svg/cards.svg';
import img2 from '../../images/svg/zoo.svg';
import img3 from '../../images/svg/panda.svg';

const PayAndFeed = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>Pay and feed</h3>
      <p className={style.text}>
        The opportunity to easily and naturally (but as often as possible)
        donate to the needs of animals that you like.
      </p>

      <ul className={style.list}>
        <li className={style.list_item}>
          <img src={img1} alt="icon cards" />
          <p>You pay with a VISA card</p>
        </li>

        <li className={style.list_line}>
          <svg xmlns="http://www.w3.org/2000/svg" width="108" height="16" viewBox="0 0 108 16" fill="none">
          <path d="M107.707 8.70711C108.098 8.31658 108.098 7.68342 107.707 7.29289L101.343 0.928932C100.953 0.538408 100.319 0.538408 99.9289 0.928932C99.5384 1.31946 99.5384 1.95262 99.9289 2.34315L105.586 8L99.9289 13.6569C99.5384 14.0474 99.5384 14.6805 99.9289 15.0711C100.319 15.4616 100.953 15.4616 101.343 15.0711L107.707 8.70711ZM0 9L107 9V7L0 7L0 9Z" fill="url(#paint0_linear_153_90)"/>
          <defs>
          <linearGradient id="paint0_linear_153_90" x1="-19.9789" y1="8" x2="-19.827" y2="12.9337" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4BD8B5"/>
          <stop offset="1" stopColor="#49D6DF"/>
          </linearGradient>
          </defs>
          </svg>
        </li>


        <li className={style.list_item}>
          <img src={img2} alt="icon zoo" />
          <p>Payment goes to the Zoo</p>
        </li>

        <li className={style.list_line}>
          <svg xmlns="http://www.w3.org/2000/svg" width="108" height="16" viewBox="0 0 108 16" fill="none">
          <path d="M107.707 8.70711C108.098 8.31658 108.098 7.68342 107.707 7.29289L101.343 0.928932C100.953 0.538408 100.319 0.538408 99.9289 0.928932C99.5384 1.31946 99.5384 1.95262 99.9289 2.34315L105.586 8L99.9289 13.6569C99.5384 14.0474 99.5384 14.6805 99.9289 15.0711C100.319 15.4616 100.953 15.4616 101.343 15.0711L107.707 8.70711ZM0 9L107 9V7L0 7L0 9Z" fill="url(#paint0_linear_153_90)"/>
          <defs>
          <linearGradient id="paint0_linear_153_90" x1="-19.9789" y1="8" x2="-19.827" y2="12.9337" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4BD8B5"/>
          <stop offset="1" stopColor="#49D6DF"/>
          </linearGradient>
          </defs>
          </svg>
        </li>



        <li className={style.list_item}>
          <img src={img3} alt="icon panda" />
          <p>Panda gets the bamboo</p>
        </li>
      </ul>

      {/* Button */}
      <button type='button' className={style.button}>
          <span className={style.btn_txt}>donate</span>
      </button>
    </div>
  );
};

export default PayAndFeed;
