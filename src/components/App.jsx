import Benefits from "./Page_section/Benefits/Benefits";
import Footer from "./Page_section/Footer/Footer";
import Header from "./Page_section/Header/Header";
import Hero from "./Page_section/Hero/Hero";
import HowItWork from "./Page_section/How it work/HowItWork";
import Map from "./Page_section/Map/Map";
import PayAndFeed from "./Page_section/Pay and feed/PayAndFeed";
import PetsInZoo from "./Page_section/Pets in zoo/PetsInZoo";
import Testimonials from "./Page_section/Testimonials/Testimonials";

import style from './App.module.css';
import { ModalDonate } from "./elements/ModalDonate/ModalDonate";

export const App = () => {

  return (
    <div className={style.body}>
      <Header/>
      <Hero/>
      <HowItWork/>
      <Benefits/>
      <PetsInZoo/>
      <PayAndFeed/>
      <Testimonials/>
      <Map/>
      <Footer/>
      <ModalDonate/>
    </div>
  );
};
