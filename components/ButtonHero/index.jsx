import style from "./ButtonHero.module.scss";
export default function ButtonHero({ dir = "<", action, forActivities = false, active = false }) {


  return (
    <button className={`${style.btnHero} 
    ${forActivities && style.forActivities}
    ${active && style.active}`}  onClick={action}>
      {dir}
    </button>
  );
}
