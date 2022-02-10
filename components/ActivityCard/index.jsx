import styles from './Activitycard.module.scss'
import Link from 'next/link'

export default function ActivityCard(props) {
    return(
        <div className={styles.single_card}>
            <div className={styles.single_card_image} style={{backgroundImage: `url(${props.activityimage || "https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`}}>
                <p style={{backgroundColor:`${props.categorycolor || '#000'}`}}>{props.category || "Category"}</p>
            </div>
            <div className={styles.single_card_info}>
                <h3>{props.activityname || "Attività"}</h3>
                <p>{props.activitydesc || "Descrizione attività"}</p>
                <div className={styles.single_card_info_price}>
                    <p>{props.activityprice || "€ XX,XX"}</p>
                    <Link href={props.activityurl || "#" }style={{color:`${props.categorycolor || '#000'}`}}><a>Scopri di più</a></Link>
                </div>
            </div>
        </div>
    )
};