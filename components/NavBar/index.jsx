import styles from './Navbar.module.scss'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    
    
    const [screenWidth, setScreenWidth] = useState((typeof window !== 'undefined') && window.innerWidth)
    

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

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

        <div className={styles.wrapper_header} style={ isonTop ? {background: ""} :{background: "#011627"} }>

            
            <div >
                <Link href="/">
                <a><img src="/logo.png" className={styles.logo} alt="logo"></img></a>      
                </Link>
            </div>
            
            
            
                <nav className={styles.nav}>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className={styles.list}>
                        <li className={styles.items}>
                            <Link href="/citta">
                                <a>Città</a>
                            </Link>
                        </li>
                        <li className={styles.items}>
                            <Link href="/esperienze">
                                <a>Esperienze</a>
                            </Link>
                        </li>
                        <li className={styles.items}>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                    )}
                    <button onClick={toggleNav} className={styles.btn}><FontAwesomeIcon className={styles.angleIcons} icon={faBars} /></button>
                
                    <div className={styles.search}>
                        <input type="text" placeholder="Type to Search..." className={styles.inputSearch}></input>
                    </div>
                    
                    <Link href="/"><a><FontAwesomeIcon className={styles.searchIcons} icon={faSearch} /></a></Link>
                </nav>   
            
                       
                

            


        </div>
    )
}
