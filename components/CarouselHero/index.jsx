import style from "./CarouselHero.module.scss";
import ButtonHero from "../ButtonHero";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CardHero from "../CardHero";
import ActivityCard from "../ActivityCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    text: "esperienza 1",
    image:
      "https://images-sandbox.musement.com/cover/0001/06/berlin_header-5512.jpeg",
  },
  {
    text: "esperienza 2",
    image:
      "https://images-sandbox.musement.com/cover/0002/15/amsterdam_header-114429.jpeg",
  },
  {
    text: "esperienza 3",
    image:
      "https://images-sandbox.musement.com/cover/0002/49/aerial-wide-angle-cityscape-view-of-paris-xxl-jpg_header-148745.jpeg",
  },
  {
    text: "esperienza 4",
    image:
      "https://images-sandbox.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
  },
  {
    text: "esperienza 5",
    image:
      "https://images-sandbox.musement.com/cover/0002/39/milan-vittorio-emanuele-ii-gallery-italy-jpg_header-138313.jpeg",
  },
  {
    text: "esperienza 6",
    image:
      "https://images-sandbox.musement.com/cover/0002/45/park-guell-in-barcelona-spain-jpg_header-144696.jpeg",
  },
  {
    text: "esperienza 7",
    image:
      "https://images-sandbox.musement.com/cover/0002/49/fotolia-199353438-subscription-xxl-jpg_header-148705.jpeg",
  },
];

export default function CarouselHero() {
  let swiperInst;
  return (
    <>
      <div className={style.container}>
        <Swiper
          className={style.carousel}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          loop={true}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperInst = swiper)}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <CardHero text={slide.text} image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.button}>
          <ButtonHero dir="<" action={() => swiperInst.slidePrev()} />
          <ButtonHero dir=">" action={() => swiperInst.slideNext()} />
        </div>
      </div>
    </>
  );
}
