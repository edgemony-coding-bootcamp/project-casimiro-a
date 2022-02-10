import style from "./CardHero.module.scss";
import Image from "next/image";

export default function CardHero({ image, text }) {
  return (
    <div className={style.container}>
      <div className={style.layer}>
        <Image src={image} alt="card image" layout="fill" />
        <p>{text}</p>
      </div>
    </div>
  );
}
