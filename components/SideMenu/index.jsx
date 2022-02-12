import style from "./SideMenu.module.scss"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideMenu, hideResult } from "../../store/actions";

export default function SideMenu(){
    
    const dispatch = useDispatch();

    function handleMenu(){
      setTimeout(() => {
          dispatch(toggleSideMenu)
      }, 200);
    }
    
  const openMenu = useSelector(state => state.showSideMenu)

  openMenu && dispatch(hideResult)

    return(
        <div className={`${style.container} ${ openMenu && style.open}`}>
             <ul>
          <li onClick={handleMenu}>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li onClick={handleMenu}>
            <Link href={"/citta"}>
              <a>Città</a>
            </Link>
          </li>
          <li onClick={handleMenu}>
            <Link href={"/esperienze"}>
              <a>Esperienze</a>
            </Link>
          </li>
          <li onClick={handleMenu}>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
        </ul>
        </div>
    );
}