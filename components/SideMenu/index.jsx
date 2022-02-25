
import { useSelector, useDispatch } from "react-redux";
import { toggleSideMenu, hideResult } from "../../store/actions";
import UlNavBar from "../UlNavBar";
import style from "./SideMenu.module.scss"

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
          <UlNavBar mobile />
        </div>
    );
}