import styles from './Navbar.module.scss'
import Link from "next/link"
import { useEffect, useState } from 'react'
//import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import SearchBar from '../SearchBar'
import { useSelector } from 'react-redux'
import Image from 'next/image'




export default function NavBar() {
    const isShow = useSelector(state => state.showResult )

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

        <div className={styles.wrapper_header} style={ !isonTop || isShow ? {background: "#011627"} :{background: ""} }>

            
            <div >
                <Link href="/">
                <a><Image src="/logo.png" className={styles.logo} alt="logo" width={300} height={74} /></a>      
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
                        <SearchBar />
                    </ul>
                    )}
                    
                
                </nav>   
            
                       
                

            


        </div>
    )
}
