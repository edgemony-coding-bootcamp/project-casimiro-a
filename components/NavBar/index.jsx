import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleSideMenu } from "../../store/actions";
import UlNavBar from "../UlNavBar";

export default function NavBar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isShow = useSelector((state) => state.showResult);
  const [isonTop, setIsonTop] = useState(true);

  function handleScroll() {
    if (window.scrollY != 0) {
      setIsonTop(false);
    } else {
      setIsonTop(true);
    }
  }

  function handleMenu() {
    dispatch(toggleSideMenu);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <div
      className={styles.container}
      style={
        !isonTop || isShow ? { background: "#011627" } : { background: "" }
      }
    >
      <div className={`${styles.menu} ${styles.flexed}`} onClick={handleMenu}>
        <FontAwesomeIcon className={styles.searchIcons} icon={faBars} />
      </div>

      <div className={`${styles.logoDiv} ${styles.flexed}`}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image src="../../logo.png" alt="logo" layout="fill" />
        </div>
      </div>

      <nav className={`${styles.navbar} ${styles.flexed}`}>
        <UlNavBar />
      </nav>

      <div className={`${styles.searchbar} ${styles.flexed}`}>
        <SearchBar />
      </div>
    </div>
  );
}
