import style from "./TextboxHero.module.scss";
import { useDispatch } from 'react-redux';
import { setCarouselSecondInst } from "../../store/actions";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function TextBoxHero({data}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.container}>
        <Swiper
          direction="vertical"
          className={style.carousel}
          spaceBetween={60}
          loop={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          speed={800}
          allowTouchMove={false}
          onSwiper={(swiper) => dispatch(setCarouselSecondInst(swiper))}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={style.text}>
                <h1>{slide.name}</h1>
                <p>{slide.meta_description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
