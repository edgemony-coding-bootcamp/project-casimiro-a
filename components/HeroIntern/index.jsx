import styles from "./HeroIntern.module.scss";

export default function HeroIntern(props) {

  return (

    <div 
      className={styles.wrapper_hero_intern}
      style={{backgroundImage: `url(${props.bgImage || "https://images.unsplash.com/photo-1523867904486-8153c8afb94f"}?w=1920)`}}
    >
      <h1>{props.title || "città non trovata"}</h1>
      <p>{props.description || "nessuna descrizione"}</p>
    </div>
  );
}
