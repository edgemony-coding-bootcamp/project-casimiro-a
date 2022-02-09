import style from "./CardHero.module.scss";
import Image from "next/image";

export default function CardHero({ image, text }) {
  return (
    <div className={style.container}>
      <div className={style.layer}>
        <img src={image} alt="card image" />
        <p>{text}</p>
      </div>
    </div>
  );
}
