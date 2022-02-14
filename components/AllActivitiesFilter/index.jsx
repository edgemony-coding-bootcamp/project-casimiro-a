import style from "./AllActivitiesFilter.module.scss";

import { useState } from "react";
import ButtonHero from "../ButtonHero";
import { filterActivities } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActivityCard from "../ActivityCard";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ActivitiesFilter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.allActivities);
  const [state, setState] = useState({
    id:"2",
    maxPrice: 200,
    category: "sightseeing",
    pagination: 0,
    up: false,
    categoria: "Tour e Attrazioni"
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
  function handleMouseUp(e){
    setState({ ...state, maxPrice: e.target.value, up: false });
  }

  function handleCategory(category) {
    setState({ 
      ...state, 
      category: category.category, 
      pagination: 0, 
      up: false,
      categoria: category.name,
      id: category.id
    });
  }

  const category = [
    {
      name: "Arte e musei",
      color: "#011627",
      category: "arts-culture",
      categoria:"Arte e Musei",
      id:"1"
    },
    {
      name: "Tour e attrazioni",
      color: "#E71D36",
      category: "sightseeing",
      id:"7"
    },
    {
      name: "Spettacoli e concerti",
      color: "red",
      category: "entertainment",
      id:"2"
    },
    {
      name: "Food & wine",
      color: "#FF9F1C",
      category: "food-wine",
      id:"3"
    },
    {
      name: "Sport e avventura",
      color: "#2EC4B6",
      category: "adventure",
      id:"6"
    },
    {
      name: "Eventi sportivi",
      color: "#21005D",
      category: "sports",
      id:"8"
    },
    {
      name: "Nightlife",
      color: "#410E0B",
      category: "nightlife",
      id:"9"
    },
  ];

  let pagineTot = data.meta ? Math.ceil(data.meta.count / 8) : 0;


  let paginationDyn = state.pagination - 6;


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

  return (
    <>
      <div id="up" className={style.container}>
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

        <div className={style.buttons}>
          {category.map((category, id) => (
            <button
              key={id}
              style={{ background: category.color }}
              onClick={() => handleCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className={style.allactivities}>
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
                category={{name : state.categoria, id: state.id}}
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
        {data.meta && [...Array(11)].map((index) => addButton())}

        <ButtonHero
          dir=">"
          forActivities={true}
          action={() =>
            
            setState({ ...state, pagination:state.pagination < pagineTot -1 ? state.pagination + 1 : state.pagination, up: true })
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
