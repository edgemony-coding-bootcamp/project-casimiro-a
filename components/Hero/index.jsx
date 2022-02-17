import SidebarHero from "../SidebarHero";
import TextboxHero from "../TextboxHero/";
import CarouselHero from "../CarouselHero";
import styles from "./Hero.module.scss";
import { useSelector } from "react-redux";

const bg = {
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  amsterdam: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  parigi: 'https://images.unsplash.com/photo-1605701877331-645ad05dcb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  roma: 'https://images.unsplash.com/photo-1555992828-35627f3b373f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  milano: 'https://images.unsplash.com/photo-1516296270211-f3ae5494e65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  barcellona: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  nizza: 'https://images.unsplash.com/photo-1572903335885-33e4a16f68f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
  default: 'https://images.unsplash.com/photo-1581460436937-81f19e138de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800&q=80',
}


export default function Hero({ data }) {
  const state = useSelector(state => state.carouselIndex);
  console.log(state);
  const switchBg = () => {
    switch (state) {
      case 0:
        return bg.dubai
        
      case 1:
        return bg.amsterdam
        
      case 2:
        return bg.parigi
        
      case 3:
        return bg.roma
       
      case 4:
        return bg.milano
        
      case 5:
        return bg.barcellona
        
      case 6:
        return bg.nizza
         
      default:
        return bg.default
        
    }
  };
  return (
    <>
      <div 
        className={styles.wrapper_hero}
        style={{ backgroundImage: `url(${switchBg()})`}}
      >
        <SidebarHero />
        <div className={styles.wrapper_text_hero}>
          <TextboxHero data={data} />
        </div>
        <div className={styles.wrapper_carousel_hero}>
          <CarouselHero data={data} />
        </div>
      </div>
    </>
  );
} 
