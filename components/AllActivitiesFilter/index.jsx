import style from "./AllActivitiesFilter.module.scss";

import { useState } from "react";
import ButtonHero from "../ButtonHero";
import { filterActivities } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActivityCard from "../ActivityCard";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

//https://sandbox.musement.com/api/v3/activities?text_operator=AUTO&extend_other_languages=AUTO&extend_content_fields=AUTO&fuzziness_level=LEVEL-0&zero_terms_query=NONE&category_in=CATEGORIA&default_price_range=00.00%2CMAXPREX&limit=10&offset=0

export default function ActivitiesFilter() {
  const dispatch = useDispatch();
  const router = useRouter()
  const data = useSelector((state) => state.allActivities);
  const [state, setState] = useState({
    maxPrice: 200,
    category: "Palermo",
    pagination: 0,
  });
  const [input, setInput] = useState(100);

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
      setState({ ...state, maxPrice: e.target.value });
    }, 1000);
  }

  function handleCategory(category) {
    setState({ ...state, category: category, pagination: 0 });
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.inputDiv}>
          <input
            type="range"
            min="1"
            max="200"
            value={input}
            step="1"
            onChange={handleChange}
          />
          <p>
            Prezzo massimo: <span>{input}</span>
          </p>
        </div>

        <div className={style.buttons}>
          <button onClick={() => handleCategory("arte e musei")}>
            Arte e musei
          </button>
          <button onClick={() => handleCategory("tour e attrazioni")}>
            Tour e attrazioni
          </button>
          <button onClick={() => handleCategory("Spettacoli e concerti")}>
            Spettacoli e concerti
          </button>
          <button onClick={() => handleCategory("cibo e vino")}>
            Food & wine
          </button>
          <button onClick={() => handleCategory("avventura")}>avventura</button>
          <button onClick={() => handleCategory("eventi sportivi")}>
            Eventi Sportivi
          </button>
          <button onClick={() => handleCategory("nightlife")}>Nightlife</button>
        </div>

        <div className={style.search}>
        
        </div>
      </div>

      <div className={style.allactivities}>
        {data.data &&
          data.data.map((el) => (
            <div className={style.singleActivity} key={el.uuid} onClick={() => router.push(`/esperienze/${el.uuid}`)}>
              <ActivityCard 
                title={el.title}
                image={el.cover_image_url}
                price={el.retail_price.formatted_iso_value}
                category=""
                text={el.description}
              />
            </div>
          ))}
      </div>

      <div className={style.pagination}>
        <ButtonHero
          action={() =>
            state.pagination > 0 &&
            setState({ ...state, pagination: state.pagination - 8 })
          }
        />
        <ButtonHero
          dir=">"
          action={() =>
            setState({ ...state, pagination: state.pagination + 8 })
          }
        />
      </div>
    </>
  );
}
