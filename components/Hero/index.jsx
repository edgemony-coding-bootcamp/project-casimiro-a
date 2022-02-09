import SidebarHero from "../SidebarHero";
import TextboxHero from "../TextboxHero/";
import CarouselHero from "../CarouselHero";
import styles from "./Hero.module.scss";
import Header from "../Header";
import { useState } from "react";

export default function Hero() {

    const [swiperInst, setSwiperInst] = useState(null);
    const [secondswiperInst, setSecondswiperInst] = useState(null);
    const [sidebarState, setsidebarState] = useState(0);

  return (
    <>
      <div className={styles.wrapper_hero}>
        <SidebarHero
            sidebarState={sidebarState}
            setsidebarState={setsidebarState}
        />
        <TextboxHero 
            secondswiperInst={secondswiperInst} 
            setSecondswiperInst={setSecondswiperInst}
        />

        <div className={styles.wrapper_carousel_hero}>
          <CarouselHero 
            swiperInst={swiperInst} 
            setSwiperInst={setSwiperInst} 
            secondswiperInst={secondswiperInst}
            setsidebarState={setsidebarState}
            sidebarState={sidebarState}
          />
        </div>
      </div>
    </>
  );
}
