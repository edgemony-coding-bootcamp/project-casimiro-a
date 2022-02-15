import style from "./AllActivitiesFilter.module.scss";

import { useState } from "react";
import ButtonHero from "../ButtonHero";
import { filterActivities } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActivityCard from "../ActivityCard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FilterCity } from "./FilterCity";

export default function ActivitiesFilter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.allActivities);
  const [state, setState] = useState({
    maxPrice: 200,
    category: "",
    pagination: 0,
    up: false,
    categoria: "",
    city: "",
  });
  const [input, setInput] = useState(200);

  useEffect(() => {
    dispatch(filterActivities(state));
  }, [state]);

  useEffect(() => {
    dispatch(filterActivities(state));
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleMouseUp(e) {
    setState({ ...state, maxPrice: e.target.value, up: false });
  }

  function handleCategory(category) {
    console.log(category);
    setState({
      ...state,
      category: category.category,
      pagination: 0,
      up: false,
      categoria: category.name,
      id: category.id,
    });
  }

  const category = [
    {
      name: "Tutto",
      color: "#000",
      category: "",
    },
    {
      name: "Arte e musei",
      color: "#011627",
      category: "arts-culture",
    },
    {
      name: "Tour e attrazioni",
      color: "#E71D36",
      category: "sightseeing",
    },
    {
      name: "Spettacoli e concerti",
      color: "red",
      category: "entertainment",
    },
    {
      name: "Food & wine",
      color: "#FF9F1C",
      category: "food-wine",
    },
    {
      name: "Sport e avventura",
      color: "#2EC4B6",
      category: "adventure",
    },
    {
      name: "Eventi sportivi",
      color: "#21005D",
      category: "sports",
    },
    {
      name: "Nightlife",
      color: "#410E0B",
      category: "nightlife",
    },
  ];

  let pagineTot = data.meta ? Math.ceil(data.meta.count / 8) : 0;
  let paginationDyn = state.pagination - 4;

  function addButton() {
    paginationDyn++;
    const clickon = paginationDyn;
    return (
        <ButtonHero
          key={clickon}
          active={state.pagination === clickon && true}
          forActivities={true}
          dir={
            (pagineTot >= paginationDyn + 1) & (paginationDyn >= 0)
              ? paginationDyn + 1
              : ""
          }
          action={
            (pagineTot >= paginationDyn) & (paginationDyn >= 0)
              ? () => setState({ ...state, pagination: clickon, up: true })
              : () => console.log("")
          }
      />
    );
  }

  function categorie(el) {
    if (el.verticals[1]) {
      if (state.categoria === el.verticals[1].name) return el.verticals[1];
      else return el.verticals[0];
    } else return el.verticals[0];
  }
  return (
    <>
      <div id="up" className={style.container}>
        <div className={style.citySearch}>
          <FilterCity setter={setState} />
        </div>

        <div className={style.buttons}>
          {category.map((category, id) => (
            <div key={id} className={`${style.buttonDiv} ${state.category === category.category && style.buttonDivOpen}`}>
            <button
              style={{ background: category.color }}
              onClick={() => handleCategory(category)}
            >
              {category.name}
            </button>
            </div>
          ))}
        </div>

        <div className={style.inputDiv}>
          <p>€ 0</p>
          <input
            type="range"
            min="1"
            max="200"
            value={input}
            step="1"
            onChange={handleChange}
            onMouseUp={handleMouseUp}
          />
          <p>
            € <span>{input}</span>
          </p>
        </div>
      </div>

      <div className={style.allactivities}>
        {data.meta && data.meta.count === 0 && (
          <div className={style.noResult}>
            <h3>Ops.. Sembra che non ci siano risultati</h3>
            <p>prova a cambiare parametri</p>
          </div>
        )}
        {data.data &&
          data.data.map((el) => (
            <div
              className={style.singleActivity}
              key={el.uuid}
              onClick={() => router.push(`/esperienze/${el.uuid}`)}
            >
              <ActivityCard
                title={el.title}
                image={el.cover_image_url || el.city.cover_image_url}
                price={el.retail_price.formatted_iso_value}
                category={categorie(el)}
                text={el.description || el.operational_days}
              />
            </div>
          ))}
      </div>

      <div className={style.pagination}>
        <ButtonHero
          forActivities={true}
          dir={"<<"}
          action={() =>
            state.pagination > 0 &&
            setState({ ...state, pagination: 0, up: true })
          }
        />
        <ButtonHero
          forActivities={true}
          action={() =>
            state.pagination > 0 &&
            setState({ ...state, pagination: state.pagination - 1, up: true })
          }
        />
        {data.meta && [...Array(7)].map((index) => addButton())}

        <ButtonHero
          dir=">"
          forActivities={true}
          action={() =>
            setState({
              ...state,
              pagination:
                state.pagination < pagineTot - 1
                  ? state.pagination + 1
                  : state.pagination,
              up: true,
            })
          }
        />
        <ButtonHero
          dir=">>"
          forActivities={true}
          action={() =>
            setState({ ...state, pagination: pagineTot - 1, up: true })
          }
        />
      </div>
    </>
  );
}
