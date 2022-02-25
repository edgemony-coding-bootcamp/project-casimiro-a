import styles from './InfoIconBox.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGift, faCalendarCheck, faBahai, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function InfoIconBox({icon, title}) {
    return(
        <div className={styles.wrapper_icon_box}>
            <FontAwesomeIcon 
                icon={icon === 1 ? faGift : icon === 2 ? faBahai : icon === 3 ? faTrash : faCalendarCheck} 
            />
            <p>{title}</p>
        </div>
    )
}