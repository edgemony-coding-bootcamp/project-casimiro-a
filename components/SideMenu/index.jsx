import style from "./SideMenu.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { toggleSideMenu, hideResult } from "../../store/actions";
import { useSession } from 'next-auth/react';
import UlNavBar from "../UlNavBar";
import SearchBar from "../SearchBar";

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
          <UlNavBar mobile />
          <SearchBar />
        </div>
    );
}