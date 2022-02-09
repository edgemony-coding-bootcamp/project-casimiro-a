import SidebarHero from "../SidebarHero";
import TextboxHero from "../TextboxHero/";
import CarouselHero from "../CarouselHero";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <div className={styles.wrapper_hero}>
        <SidebarHero />
        <TextboxHero />
        <CarouselHero />
      </div>
    </>
  );
}
