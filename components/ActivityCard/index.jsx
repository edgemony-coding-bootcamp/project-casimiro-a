import styles from './Activitycard.module.scss'

export default function ActivityCard() {
    return(
        <div className={styles.single_card}>
            <div className={styles.single_card_image}>
                <p>Category</p>
            </div>
            <div className={styles.single_card_info}>
                <h3>Attività n° 1</h3>
                <p>Descrizione attività: Lorem Ipsum 
                is simply dummy text of the printing and typesetting industry.</p>
                <div className={styles.single_card_info_price}>
                    <p>Price</p>
                    <a href="#">Scopri di più</a>
                </div>
            </div>
        </div>
    )
};