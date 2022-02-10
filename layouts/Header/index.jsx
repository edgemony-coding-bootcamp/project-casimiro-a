import styles from './index.module.scss'
import Link from "next/link"
import { useEffect, useState } from 'react'





export default function Header({ children }) {

    function handleScroll(){
        if (window.scrollY != 0){
            setIsonTop(false)
        } 
        else{
            setIsonTop(true)
        }
    }
    
    const [isonTop, setIsonTop] = useState(true)

    useEffect(() => {
     window.addEventListener("scroll", () => handleScroll())
    }, []);
    

    
    return (

        <div className={styles.wrapper_header}
            style={ isonTop ? {background: ""} :{background: "#011627"} }
        >

            <Link href="/">
              <a><img src="/logo.png" alt="logo"></img></a>      
            </Link>
            
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
