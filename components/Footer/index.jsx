import { faPhoneAlt, faAngleRight, faHeart} from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import Image from 'next/image';
import styles from './Footer.module.scss'

export default function Footer() {
  return (   
            
    <div className={styles.footerWrapper}>

        <div className={styles.rowItemsWrapper}>
            <div className={styles.logoWrapper}>
            <Link href="/">
                <a>
                <Image src="\logov.positiva.png" alt="logo" width={300} height={74} /> 
                </a>
            </Link>
                <p>Lorem Ipsum is simply dummy... </p>
            </div>
            <div className={styles.menùWrapper}>
                <h3>Menù</h3>
                <ul>
                <Link href="/citta">   
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
            <h3>Made with <FontAwesomeIcon className={styles.heart} icon={faHeart} /> & Next.JS by</h3>
            <p>
            <Link href="https://www.linkedin.com/in/agnese-spinella/">
                <a target="_blank">Agnese</a>
            </Link>
            <Link href="https://www.linkedin.com/in/dario-castiglione/">
                <a target="_blank">Dario</a>
            </Link>
            <Link href="https://www.linkedin.com/in/davide-missiato/">
                <a target="_blank">Davide</a>
            </Link>
            <Link href="https://www.linkedin.com/in/federica-santoro-/">
                <a target="_blank">Federica</a>
            </Link>
            <Link href="https://www.linkedin.com/in/roberta-pennisi/">
                <a target="_blank">Roberta</a>
            </Link>
            </p>
        </div>
     
    </div>    

  );
}
