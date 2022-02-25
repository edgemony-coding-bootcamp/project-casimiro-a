
import { useTranslation } from 'react-i18next'
import '../../translations/i18n';
import { faPhoneAlt, faAngleRight, faHeart} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import Link from "next/link"
import Image from 'next/image';
import styles from './Footer.module.scss'


export default function Footer() {
    const router = useRouter();
    const { t } = useTranslation();


    return (    
        <div className={styles.footerWrapper}>
            <div className={styles.rowItemsWrapper}>
                <div className={styles.logoWrapper}>

            <div className={styles.logo} onClick={() => router.push("/")}>
                <Image src="\logov.positiva.png" alt="logo" layout="fill" /> 
            </div>
                <p>{t('meta_description')}</p>

          
                <div className={styles.menùWrapper}>
                    <h3>{t('footer_menu')}</h3>
                    <ul>
                        <li>
                            <Link href="/citta">   
                                <a><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> {t('ulNavBar_city')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/esperienze"> 
                                <a><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> {t('ulNavBar_experience')}</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a><FontAwesomeIcon className={styles.angleIcons} icon={faAngleRight} /> About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contattiWrapper}>
                    <h3>{t('footer_contacts')}</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon className={styles.icons} icon={faEnvelope} /> info@travelhub.com
                        </li>
                        <li>
                            <FontAwesomeIcon className={styles.icons} icon={faPhoneAlt} /> +39 123 456 7890
                        </li>
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
                <div>
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
                </div>
            </div>

        </div>    
    );
}
