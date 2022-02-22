import style from "./SideMenu.module.scss"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideMenu, hideResult } from "../../store/actions";
import { useSession } from 'next-auth/react';

export default function SideMenu(){
    
    const dispatch = useDispatch();

    function handleMenu(){
      setTimeout(() => {
          dispatch(toggleSideMenu)
      }, 200);
    }
    
    const openMenu = useSelector(state => state.showSideMenu)

    openMenu && dispatch(hideResult)

    const { data: session } = useSession();

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
          {
            session ? (
              <li>
                <Link href={"/cart"}>
                  <a>Carrello</a>
                </Link>
              </li>
            ) : (
              <></>
            )
          }
        </ul>
        </div>
    );
}