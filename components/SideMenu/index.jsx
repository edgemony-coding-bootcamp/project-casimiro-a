import style from "./SideMenu.module.scss"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideMenu, hideResult } from "../../store/actions";
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

    return(
        <div className={`${style.container} ${ openMenu && style.open}`}>
          <UlNavBar />
          <SearchBar />
        </div>
    );
}