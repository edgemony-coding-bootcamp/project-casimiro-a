import styles from "./HeroIntern.module.scss";

export default function HeroIntern(props) {

  return (

    <div 
      className={styles.wrapper_hero_intern}
      style={{backgroundImage: `url(${props.cityImage || "https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`}}
    >
      <h1>{props.cityName || "nome Città"}</h1>
      <p>{props.cityDescription || "descrizione città"}</p>
    </div>

  );
}