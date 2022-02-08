import styles from './index.module.scss'
import Link from "next/link"

export default function Header({ children }) {
    return (
        <div className={styles.wrapper_header}>
            <img src="/logo.png" alt="logo"></img>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/città">
                            <a>Città</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/esperienze">
                            <a>Esperienze</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.search}>
                <input type="text" placeholder="Type to Search..." className={styles.inputSearch}></input>
            </div>
        </div>
    )
}