import style from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SearchBarAppear,
  SearchBarDisappear,
  SearchFetch,
  hideResult,
  toggleSideMenu
} from "../../store/actions";

export default function SearchBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.searchBarActive);
  const data = useSelector((state) => state.searchData);
  const isShow = useSelector((state) => state.showResult);
  const sideMenu = useSelector(state => state.showSideMenu)
  function hide() {
    dispatch(hideResult);
  }

  function handleSearch() {
    dispatch(SearchBarAppear);

    sideMenu && dispatch(toggleSideMenu)

  }

  function handleLeave() {
    setTimeout(() => {
      dispatch(SearchBarDisappear);
    }, 300);
  }

  let timer = 0;
  function handleInput(e) {
    timer++;

    setTimeout(() => {
      timer--;
      if (timer === 0) {
        e.target.value && dispatch(SearchFetch(e));
      }
    }, 500);
  }
  function handleRouting(res, route) {
    router.push(`/${route}/${res}`);
    console.log(res)
    setTimeout(() => {
      dispatch(hideResult);
    }, 300);
  }


  let imgStyle = {};


  if (isActive) imgStyle = { opacity: "0" };

  return (
    <>
      <div className={style.container} onMouseLeave={handleLeave}>
        <button onClick={handleSearch}>
          <FontAwesomeIcon
            className={style.searchIcons}
            style={imgStyle}
            icon={faSearch}
          />
          <input
            type="text"
            onChange={handleInput}
            className={`${style.inputText} ${isActive && style.open}`}
            placeholder="Cerca..."
          />
        </button>
      </div>

      {data.data && (
        <div
          className={`${style.result} ${isShow && style.open}`}
          onMouseLeave={hide}
        >
          {data.data.map((res) => (
            <div className={style.info} key={res.uuid}>
              <div className={style.img}  onClick={() => handleRouting(res.uuid,"esperienze")}>
                <Image src={res.cover_image_url && res.cover_image_url.replace('?w=540', '') + '?h=120&w'} alt={res.name} width={150} height={150} priority={1} />
              </div>
              <div className={style.text}>
                <h3 className={style.cityName} onClick={() => handleRouting(res.city.id,"citta")} >{res.city.name}</h3>
                <p className={style.cityName} onClick={() => handleRouting(res.uuid,"esperienze")} >{res.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
