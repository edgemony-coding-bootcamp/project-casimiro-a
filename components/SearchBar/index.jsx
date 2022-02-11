import style from "./SearchBar.module.scss";
import { faSearch, faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  SearchBarAppear,
  SearchBarDisappear,
  SearchFetch,
  hideResult,
} from "../../store/actions";

export default function SearchBar() {

  const router = useRouter();  
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.searchBarActive);
  const data = useSelector((state) => state.searchData);
  const isShow = useSelector((state) => state.showResult);

  function hide() {
    dispatch(hideResult);
    
  }

  function handleSearch() {
    dispatch(SearchBarAppear);
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

  let inputStyle = {};
  let imgStyle = {};
  let resultStyle = {};

  if (isShow) {
    resultStyle = {
      height: "300px",
      display: "block",
    };
  } else {
    resultStyle = {
      height: "0px",
      opacity: "0",
    };
  }

  if (isActive)
    (inputStyle = {
      width: "100px",
      opacity: 1,
      animation: "appear 1s",
      margin: "0 10px",
      right: "12.5px",
    }),
      (imgStyle = { opacity: "0" });

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
            style={inputStyle}
            placeholder="Cerca..."
          />
        </button>
      </div>

      {data.data && (
        <div className={style.result} style={resultStyle} onMouseLeave={hide} >
          {data.data.map((res) => (
            <div className={style.info} key={res.uuid} onClick={() => router.push(`esperienze/${res.uuid}`)}>
              <div className={style.img}>
                <Image 
                  src={res.cover_image_url}
                  width={150}
                  height={150}
                />
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
