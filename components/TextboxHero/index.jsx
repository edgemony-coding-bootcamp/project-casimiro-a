import styles from "./TextboxHero.module.scss";

import style from "./TextboxHero.module.scss";
import ButtonHero from "../ButtonHero";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    text: "esperienza 1",
    image:
      "https://images-sandbox.musement.com/cover/0001/06/berlin_header-5512.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 2",
    image:
      "https://images-sandbox.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 3",
    image:
      "https://images-sandbox.musement.com/cover/0002/49/aerial-wide-angle-cityscape-view-of-paris-xxl-jpg_header-148745.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 4",
    image:
      "https://images-sandbox.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 5",
    image:
      "https://images-sandbox.musement.com/cover/0002/39/milan-vittorio-emanuele-ii-gallery-italy-jpg_header-138313.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 6",
    image:
      "https://images-sandbox.musement.com/cover/0002/45/park-guell-in-barcelona-spain-jpg_header-144696.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
  {
    text: "esperienza 7",
    image:
      "https://images-sandbox.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg",
    headline: "Esperienza",
    more: "Scopri le migliori attrazioni, attività, musei e tour guidati a Barcellona. Acquista online i biglietti per la Sagrada Familia, il Park Güell, la Casa Batlló o il Camp Nou. Pianifica la tua visita a Barcellona con i bambini, con i tuoi amici, da solo o in coppia e prenota le attività su Musement.",
  },
];

export default function TextBoxHero({setSecondswiperInst, secondSwiperInst}) {


  return (
    <>
      <div className={style.container}>
        <Swiper
          direction="vertical"
          className={style.carousel}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          loop={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          speed={800}
          allowTouchMove={false}
          onSwiper={(swiper) => setSecondswiperInst(swiper)}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={style.text}>
                <h1>{slide.headline}</h1>
                <p>{slide.more}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
