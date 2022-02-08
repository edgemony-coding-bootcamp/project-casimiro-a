import SidebarHeroDot from "../SidebarHeroDot/SidebarHeroDot";
import style from "./SidebarHero.module.scss";
export default function SidebarHero() {
  return (
    <div className={style.container}>
      <SidebarHeroDot isChosen={true} />
      <SidebarHeroDot />
      <SidebarHeroDot />
      <SidebarHeroDot />
      <SidebarHeroDot />
      <SidebarHeroDot />
      <SidebarHeroDot />
    </div>
  );
}
