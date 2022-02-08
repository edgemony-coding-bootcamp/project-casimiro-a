import styles from '../styles/Activities.module.scss'
import ActivityCard from '../components/ActivityCard'

export default function Activities() {
    return(
        <section className={styles.wrapper_activities}>
            <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>Esperienze popolari:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <button>Visualizza tutte le esperienze</button>
            </div>
            <div className={styles.wrapper_activities_cards}>
                <ActivityCard />
                <ActivityCard />
            </div>
        </section>
    )
}