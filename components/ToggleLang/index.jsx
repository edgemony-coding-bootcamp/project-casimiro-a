import styles from './ToggleLang.module.scss'

export default function ToggleLang() {
    return(
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    )
};