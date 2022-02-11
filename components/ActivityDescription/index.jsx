import Image from 'next/image'
import styles from './ActivityDescription.module.scss'

export default function ActivityDescription({
    image = 'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    title = 'immagine attività',
    description = 'Descrizione Lorem Ipsum',
    price = '€'
    }) {
    return(
        <section className={styles.wrapper_activity_description}>
            <div className={styles.wrapper_activity_image}>
                <Image 
                    src={image}
                    alt={title}
                    width='600px'
                    height='400px'
                />
            </div>
            <div className={styles.wrapper_activity_info}>
                <h2>Descrizione:</h2>
                <p>{description}</p>
                <div className={styles.wrapper_activity_shop}>
                    <p className={styles.price}>{price}</p>
                    <button>Aggiungi al carrello</button>
                </div>
            </div>
        </section>
    )
};