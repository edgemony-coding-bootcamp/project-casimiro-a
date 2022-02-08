import styles from "./SidebarHeroDot.module.scss";
export default function SidebarHeroDot({ isChosen }) {
  console.log(isChosen);

  let styled = {};

  isChosen
    ? (styled = { width: "40px", height: "40px" })
    : (styled = {
        width: "20px",
        height: "20px",
      });

  return <div className={styles.container} style={styled}></div>;
}
