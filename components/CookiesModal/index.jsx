import styles from './CookiesModal.module.scss';
import { faCookie} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

export default function CookiesModal(props) {
  

  return (          
    <div className={styles.modalWrapper}>
        <div className={styles.iconWrapper}>
            <FontAwesomeIcon className={styles.cookieIcons} icon={faCookie}/>
        </div>
        <div className={styles.textWrapper}>
            <h3>Usiamo i cookies per offrirti un esperienza migliore.</h3>
        </div>
        <div className={styles.btns}>
            <button onClick={() => props.changeShowModal()} className={styles.acceptBtn}>Accetta</button>
            <button className={styles.denyBtn}>
                <Link href="https://www.google.com">
                    <a target="_blank">Rifiuta</a>
                </Link>
            </button>
        </div>
    </div>
  );
};


