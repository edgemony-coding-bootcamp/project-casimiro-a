
import styles from "./Navbar.module.scss";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import SearchBar from "../SearchBar";
import UlNavBar from "../UlNavBar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react';
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleSideMenu } from "../../store/actions";
import ToggleLang from "../ToggleLang";

export default function NavBar() 
{
  const [isonTop, setIsonTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { t } = useTranslation();

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


  return (
    <div
      className={styles.container}
      style={
        !isonTop || isShow ? { background: "#011627" } : { background: "" }
      }
    >
      <Head>
        <title>TravelHub</title>
        <link rel="icon" type="image/png" href="/favicon.png/"/>
        <meta charSet="utf-8" />
        <meta name="description" content={t('meta_description')} />
        <meta name="keywords" content={t('meta_keywords')} />
        <meta name="author" content="TravelHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
        <ToggleLang/>
        <SearchBar />
        {
          session &&
            <Link href={"/cart"}>
              <a>
                <FontAwesomeIcon className={styles.cart} icon={faCartShopping} title='cart'/>
              </a>
            </Link>
        }
      </div>
    </div>
  );
}
