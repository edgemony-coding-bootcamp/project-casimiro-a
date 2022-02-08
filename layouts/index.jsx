import styles from './index.module.scss'
import Link from "next/link"

export default function Header({children}) {
    return(
    <>
    <div className={styles.header}>
        <nav className={styles.nav}>
            <img className={styles.logo} src="/logo.png" alt="logo"></img>
            <ul>
              <li>
                  <Link href="/città">
                      <a>Città</a>
                  </Link>
              </li>  
            </ul>
            <ul>
              <li>
                  <Link href="/esperienze">
                      <a>Esperienze</a>
                  </Link>
              </li>  
            </ul>
            <ul>
              <li>
                  <Link href="/about">
                      <a>About</a>
                  </Link>
              </li>  
            </ul>
            <div className={styles.search}>
            <input  type="text" placeholder="Type to Search..." className={styles.inputSearch}></input>
            </div>
        </nav>
    </div>
    </>)
}