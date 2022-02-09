import SidebarHeroDot from "../SidebarHeroDot/SidebarHeroDot";
import style from "./SidebarHero.module.scss";
export default function SidebarHero() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  //fake storage è una variabile che verrà sostituita dall'index del carousel
  //quando avremo implementato lo state managment

  const fakeStorage = 0;

  console.log(arr);
  return (
    <div className={style.container}>
      {arr.map((el, index) => (
        <SidebarHeroDot isChosen={index === fakeStorage && true} />
      ))}
    </div>
  );
}
