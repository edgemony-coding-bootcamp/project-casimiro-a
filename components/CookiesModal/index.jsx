
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import { faCookie} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import styles from './CookiesModal.module.scss';

export default function CookiesModal(props) 
{
    const { t } = useTranslation();

    return (          
        <div className={styles.modalWrapper}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.cookieIcons} icon={faCookie}/>
            </div>
            <div className={styles.textWrapper}>
                <h3>{t('cookiesModal_h3')}</h3>
            </div>
            <div className={styles.btns}>
                <button onClick={() => props.changeShowModal()} className={styles.acceptBtn}>{t('cookiesModal_accept')}</button>
                <button className={styles.denyBtn}>
                    <Link href="https://www.google.com">
                        <a target="_blank">{t('cookiesModal_reject')}</a>
                    </Link>
                </button>
            </div>
        </div>
    );
};


