import style from "./ButtonHero.module.scss";
export default function ButtonHero({ dir = "<", action, forActivities = false }) {

  console.log(forActivities)
  return (
    <button className={`${style.btnHero} ${forActivities && style.forActivities}`}  onClick={action}>
      {dir}
    </button>
  );
}
