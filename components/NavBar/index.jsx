import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleSideMenu } from "../../store/actions";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() 
{
  const [isonTop, setIsonTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.showResult);

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


  const { data: session } = useSession();

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
        <ul>
          <li>
            <Link href={"/citta"}>
              <a>Città</a>
            </Link>
          </li>
          <li>
            <Link href={"/esperienze"}>
              <a>Esperienze</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
            {session ? (
              <>
                <li onClick={signOut} style={{cursor:"pointer"}}>
                  <a>Signout</a>
                </li>
              </>
            ) : (
              <li>
                <Link href={"/auth/signin"}>
                  <a>Login</a>
                </Link>
              </li>
            )}
        </ul>
      </nav>

      <div className={`${styles.searchbar} ${styles.flexed}`}>
        <SearchBar />
        {
          session &&
            <Link href={"/cart"}>
              <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
            </Link>
        }
      </div>
    </div>
  );
}
