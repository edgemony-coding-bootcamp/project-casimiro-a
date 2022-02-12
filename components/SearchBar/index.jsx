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
    }, 1000);
  }
  function handleRouting(res) {
    router.push(`/esperienze/${res.uuid}`);
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
            <div className={style.info} key={res.uuid} onClick={() => handleRouting(res)}>
              <div className={style.img}>
                <Image src={res.cover_image_url} width={150} height={150} />
              </div>
              <div className={style.text}>
                <h3>{res.city.name}</h3>
                <p>{res.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
