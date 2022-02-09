import style from "./ButtonHero.module.scss";
export default function ButtonHero({ dir = "<", action }) {
  return (
    <button className={style.btnHero} onClick={action}>
      {dir}
    </button>
  );
}
