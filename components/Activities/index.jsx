import styles from './Activities.module.scss'
import ActivityCard from '../ActivityCard'

export default function Activities() {
    return(
        <section className={styles.wrapper_activities}>
            <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>Esperienze popolari:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <a href="#">Visualizza tutte le esperienze</a>
            </div>
            <div className={styles.wrapper_activities_cards}>
                <ActivityCard />
            </div>
        </section>
    )
}