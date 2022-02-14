import SidebarHero from "../SidebarHero";
import TextboxHero from "../TextboxHero/";
import CarouselHero from "../CarouselHero";
import styles from "./Hero.module.scss";


export default function Hero({ data }) {
  return (
    <>
      <div className={styles.wrapper_hero}>

        <SidebarHero />
        <TextboxHero data={data} />

        <div className={styles.wrapper_carousel_hero}>

          <CarouselHero data={data} />

        </div>
      </div>
    </>
  );
}
