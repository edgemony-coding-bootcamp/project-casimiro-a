import SidebarHeroDot from "../SidebarHeroDot/SidebarHeroDot";
import style from "./SidebarHero.module.scss";
import { useSelector } from "react-redux";
export default function SidebarHero() {
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const state = useSelector(state => state.carouselIndex)
 

  return (
    <div className={style.container}>
    <div className={style.sidebar}>
      {arr.map((el, index) => (
        <SidebarHeroDot key={index} isChosen={index === state && true} />
      ))}
    </div>
    </div>
  );
}
