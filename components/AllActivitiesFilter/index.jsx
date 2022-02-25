
import { useState } from "react";
import { filterActivities } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { FilterCity } from "./FilterCity";
import ButtonHero from "../ButtonHero";
import ActivityCard from "../ActivityCard";
import style from "./AllActivitiesFilter.module.scss";



export default function ActivitiesFilter() 
{
  const { t } = useTranslation();

  const category = [
    {
      name: t('category_all'),
      color: "#27172A",
      category: "",
    },
    {
      name: t('category_arts'),
      color: "#011627",
      category: "arts-culture",
    },
    {
      name: t('category_sightseeing'),
      color: "#E71D36",
      category: "sightseeing",
    },
    {
      name: t('category_entertainment'),
      color: "#EF482D",
      category: "entertainment",
    },
    {
      name: "Food & wine",
      color: "#FF9F1C",
      category: "food-wine",
    },
    {
      name: t('category_adventure'),
      color: "#2EC4B6",
      category: "adventure",
    },
    {
      name: t('category_sports'),
      color: "#186D6F",
      category: "sports",
    },
    {
      name: "Nightlife",
      color: "#08333F",
      category: "nightlife",
    },
  ];

  const dispatch = useDispatch();
  const router = useRouter();
  const data = useSelector((state) => state.allActivities);

  const [state, setState] = useState({
    maxPrice: 500,
    category: "",
    pagination: 0,
    up: false,
    categoria: "",
    city: "",
  });
  const [input, setInput] = useState(500);

  useEffect(() => 
  {
    dispatch(filterActivities(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    dispatch(filterActivities(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleMouseUp(e) {
    setState({ ...state, maxPrice: e.target.value, up: false });
  }

  function handleCategory(category) {
    setState({
      ...state,
      category: category.category,
      pagination: 0,
      up: false,
      categoria: category.name,
      id: category.id,
    });
  }

  

  let pagineTot = data.meta ? Math.ceil(data.meta.count / 8) : 0;
  let paginationDyn = state.pagination - 4;

  function addPaginationButton() {
    paginationDyn++;
    const clickon = paginationDyn;
    return (
      <div className={`
        ${clickon < 0 && style.btn} 
        ${clickon > pagineTot -1 && style.btn} 
        ${clickon > state.pagination +1 && style.none}
        ${clickon < state.pagination -1 && style.none}
          
      `}>
        
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
      </div>
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
        <div className={style.inputDiv}>
          <p>{t('currency')} 0</p>
          <p className={style.price}>
            {t('currency')} <span>{input}</span>
          </p>
          <input
            type="range"
            min="1"
            max="500"
            value={input}
            step="1"
            onChange={handleChange}
            onMouseUp={handleMouseUp}
          />

        </div>

        <div className={style.citySearch}>
          <FilterCity setter={setState} />
        </div>


        <div className={style.buttons}>
          {category.map((category, id) => (
            <div
              key={id}
              className={`${style.buttonDiv} ${
                state.category === category.category && style.buttonDivOpen
              }`}
            >
              <button
                style={{ background: category.color }}
                onClick={() => handleCategory(category)}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>

        
      </div>

      <div className={style.allactivities}>
        {data.meta && data.meta.count === 0 && (
          <div className={style.noResult}>
            <h3>Ops.. Sembra che non ci siano risultati</h3>
            <p>prova a cambiare parametri</p>
          </div>
        )}
         {data.data && data.data.map((el) => (
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
        {data.meta && [...Array(7)].map((index) => addPaginationButton())}

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
