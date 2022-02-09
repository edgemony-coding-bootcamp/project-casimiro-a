import { faPhoneAlt, faAngleRight, faHeart} from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Footer.module.scss'

export default function Footer() {
  return (   
            
    <div className={styles.footerWrapper}>

        <div className={styles.rowItemsWrapper}>
            <div className={styles.logoWrapper}>
                <h2>TravelHub</h2>
                <p>Lorem Ipsum is simply dummy... </p>
            </div>
            <div className={styles.menùWrapper}>
                <h3>Menù</h3>
                <ul>
                    <li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> Città</li>
                    <li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> Esperienze</li>
                    <li><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> About</li>
                </ul>
            </div>
            <div className={styles.contattiWrapper}>
                <h3>Contatti</h3>
                <ul>
                    <li><FontAwesomeIcon className={styles.icons} icon={faEnvelope} /> info@travelhub.com</li>
                    <li><FontAwesomeIcon className={styles.icons} icon={faPhoneAlt} /> +39 123 456 7890</li>
                    <li>
                       
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
