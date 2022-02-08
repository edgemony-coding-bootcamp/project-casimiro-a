import style from "./ButtonHero.module.scss";
export default function ButtonHero({ dir = "<" }) {
  return <button className={style.btnHero}>{dir}</button>;
}
