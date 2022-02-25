
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SearchBar.module.scss";

import {
  SearchBarAppear,
  SearchBarDisappear,
  SearchFetch,
  hideResult,
  toggleSideMenu,
} from "../../store/actions";

export default function SearchBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.searchBarActive);
  const data = useSelector((state) => state.searchData);
  const isShow = useSelector((state) => state.showResult);
  const sideMenu = useSelector((state) => state.showSideMenu);
  const { t } = useTranslation();

  function hide() {
    dispatch(hideResult);
    dispatch(SearchBarDisappear);
  }

  function handleSearch() {
    dispatch(SearchBarAppear);
  }

  function handleLeave(e) {
    setTimeout(() => {
      e.target.value === "" && dispatch(SearchBarDisappear);
    }, 5000);
  }

  let inputTimeout = null;

  function handleInput(e) {
    clearTimeout(inputTimeout);

    inputTimeout = setTimeout(() => {
      e.target.value && dispatch(SearchFetch(e));
      e.target.value = "";
    }, 1000);
  }

  function handleRouting(res, route) {
    router.push(`/${route}/${res}`);

    setTimeout(() => {
      dispatch(hideResult);
      sideMenu && dispatch(toggleSideMenu);
    }, 300);
  }

  let imgStyle = { color: "#000" };
  if (isActive) imgStyle = { opacity: "0" };

  return (
    <>
      <div className={style.container}>
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
            placeholder={t('searchBar_placeholder')}
            onMouseLeave={handleLeave}
          />
        </button>
      </div>

      {data.data && (
        <div
          className={`${style.result} ${isShow && style.open}`}
          onMouseLeave={hide}
        >
          <button className={style.closeBtn} onClick={hide}>
            chiudi
          </button>
          {data.data.map((res) => (
            <div className={style.info} key={res.uuid}>
              <div
                className={style.img}
                onClick={() => handleRouting(res.uuid, "esperienze")}
              >
                <Image
                  src={
                    res.cover_image_url
                      ? res.cover_image_url.replace("?w=540", "") + "?h=120&w"
                      : ""
                  }
                  alt={res.name}
                  width={150}
                  height={150}
                  priority={1}
                />
              </div>
              <div className={style.text}>
                <h3
                  className={style.cityName}
                  onClick={() => handleRouting(res.city.id, "citta")}
                >
                  {res.city.name}
                </h3>
                <p
                  className={style.cityName}
                  onClick={() => handleRouting(res.uuid, "esperienze")}
                >
                  {res.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
