import SidebarHeroDot from "../SidebarHeroDot/SidebarHeroDot";
import style from "./SidebarHero.module.scss";
export default function SidebarHero({sidebarState}) {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  //fake storage è una variabile che verrà sostituita dall'index del carousel
  //quando avremo implementato lo state managment

  

  const fakestate =  sidebarState
  return (
    <div className={style.container}>
    <div className={style.sidebar}>
      {arr.map((el, index) => (
        <SidebarHeroDot key={index} isChosen={index === fakestate && true} />
      ))}
    </div>
    </div>
  );
}
