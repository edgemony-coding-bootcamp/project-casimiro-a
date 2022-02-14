import styles from "./SidebarHeroDot.module.scss";
export default function SidebarHeroDot({ isChosen }) {

  let styled = {};

  isChosen
    ? (styled = { width: "40px", height: "40px", opacity: "0.9" })
    : (styled = {
        width: "20px",
        height: "20px",

      });

  return <div className={styles.container} style={styled}></div>;
}
