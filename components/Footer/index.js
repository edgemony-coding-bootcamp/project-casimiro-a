import { faPhoneAlt, faAngleRight, faHeart} from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import styles from './Footer.module.scss'

export default function Footer() {
  return (   
            
    <div className={styles.footerWrapper}>

        <div className={styles.rowItemsWrapper}>
            <div className={styles.logoWrapper}>
            <Link href="/">
                <a>
                <img src="/logov.positiva.png" alt="logo"></img>             
                </a>
            </Link>
                <p>Lorem Ipsum is simply dummy... </p>
            </div>
            <div className={styles.menùWrapper}>
                <h3>Menù</h3>
                <ul>
                <Link href="/città">   
                    <a><li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> Città</li></a>
                </Link>
                <Link href="/esperienze"> 
                    <a><li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> Esperienze</li></a>
                </Link>
                <Link href="/about">
                    <a><li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> About</li></a>
                </Link>
                </ul>
            </div>
            <div className={styles.contattiWrapper}>
                <h3>Contatti</h3>
                <ul>
                    <li><FontAwesomeIcon className={styles.icons} icon={faEnvelope} /> info@travelhub.com</li>
                    <li><FontAwesomeIcon className={styles.icons} icon={faPhoneAlt} /> +39 123 456 7890</li>
                    <li>
                    <div className={styles.brandsIcons}>
                    <FontAwesomeIcon className={styles.icons} icon={faInstagram}/>
                    <FontAwesomeIcon className={styles.icons} icon={faFacebook}/>
                    <FontAwesomeIcon className={styles.icons} icon={faTwitter}/>
                    </div>   
                    </li>
                    
                </ul>
            </div>
        </div>
       
        <div className={styles.AuthorsWrapper}>
            <h3>Made with <FontAwesomeIcon className={styles.heart} icon={faHeart} /> & Next.JS</h3>
            <p>by Agnese, Dario, Davide, Federica & Roberta</p>
            
        </div>
     
    </div>    

  );
}
