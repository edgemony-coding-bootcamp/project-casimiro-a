import style from "./AllActivitiesFilter.module.scss";

import { useState } from "react";
import ButtonHero from "../ButtonHero";
import { filterActivities } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActivityCard from "../ActivityCard";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

export default function ActivitiesFilter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.allActivities);
  const [state, setState] = useState({
    maxPrice: 200,
    category: "sightseeing",
    pagination: 0,
    up: false,
  });
  const [input, setInput] = useState(200);

  let counter = 0;
  useEffect(() => {
    counter++;
    setTimeout(() => {
      counter--;
      counter === 0 && dispatch(filterActivities(state));
    }, 1000);
  }, [state]);

  useEffect(() => {
    dispatch(filterActivities(state));
  }, []);

  function handleChange(e) {
    setInput(e.target.value);

    setTimeout(() => {
      setState({ ...state, maxPrice: e.target.value, up: false });
    }, 1000);
  }

  function handleCategory(category) {
    setState({ ...state, category: category, pagination: 0, up: false });
  }

  const category = [
    {
      name: "Arte e musei",
      color: "#011627",
      category: "arts-culture",
    },
    {
      name: "Tour e attrazioni",
      color: "#E71D36",
      category: "sightseeing"
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
      color: "red",
      category: "sports"
    },
    {
      name: "Nightlife",
      color: "red",
      category: "nightlife"
    },
  ];
  console.log(data)
  return (
    <>
      <div id="up" className={style.container}>
        <div  className={style.inputDiv}>
          <p>€ 0</p>
          <input
            type="range"
            min="1"
            max="200"
            value={input}
            step="1"
            onChange={handleChange}
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
              onClick={() => handleCategory(category.category)}
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
                category=""
                text={el.description || el.operational_days}
              />
            </div>
          ))}
      </div>

      <div className={style.pagination}>
        <ButtonHero
        forActivities = {true}

          action={() =>
            state.pagination > 0 &&
            setState({ ...state, pagination: state.pagination - 8, up: true })
          }
        />
        <ButtonHero
          dir=">"
          forActivities = {true}
          action={() =>
            setState({ ...state, pagination: state.pagination + 8, up: true })
          }
        />
      </div>
    </>
  );
}
