import style from "./TextboxHero.module.scss";

export default function TextboxHero() {
  return (
    <div className={style.container}>
      <h2>TITOLO 1</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{" "}
      </p>
    </div>
  );
}
