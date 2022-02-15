import style from "./FilterCity.module.scss";
import { useState } from "react";
import { dispatch } from "react";
import { useDispatch } from "react-redux";
import { searchCity, setSearchCity } from "../../../store/actions";
import { useSelector } from "react-redux";

let counter = 0;
export function FilterCity({ setter }) {
  const dispatch = useDispatch();

  const [closeSearch, setCloseSearch] = useState(false);

  const data = useSelector((state) => state.searchCity);

  const [state, setState] = useState("");


  function handleChange(e) {
    counter++;
      setState(e.target.value);
    
    setTimeout(() => {
      
    counter--;
      if (counter === 0) {
        dispatch(searchCity(e));
        setCloseSearch(false);
      }
    }, 300);
  }

  function handleClick(e) {
    setter((prev) => ({ ...prev, city: e.target.id, category: ""}));
    setCloseSearch(true);
    setState(e.target.title);
  }

  return (
    <div className={style.searchCity}>
      <p>Città:</p>
      <div className={style.searchbarCity}>
        <input
          type="text"
          name=""
          id=""
          value={state}
          placeholder="Es: Palermo"
          onChange={handleChange}
        />
        <div
          className={`${style.searchbar} ${data[0] && style.searchbarOpen} ${
            closeSearch && style.searchbarClosed
          }`}
        >
          {data[0] &&
            data[0].items.map((el) => (
              <p onClick={handleClick} id={el.id} key={el.id} title={el.title}>
                {el.title}
              </p>
            ))}
        </div>
      </div>
      <p style={{opacity: 0}}>Città:</p>
    </div>
  );
}
