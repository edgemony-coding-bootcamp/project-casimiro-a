import styles from './Activitycard.module.scss'
import Link from 'next/link'

export default function ActivityCard(props) {
    const categorycolor = props.categorycolor || '#000';
    const category = props.category || "Category";
    const activityname = props.activityname || "Attività";
    const activitydesc = props.activitydesc || "Descrizione attività";
    const activityprice = props.activityprice || "€ XX,XX";
    const activityurl = props.activityurl || "#";
    
    return(
        <div className={styles.single_card}>
            <div className={styles.single_card_image} style={{backgroundImage: `url(${props.activityimage || "https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`}}>
                <p style={{backgroundColor:`${categorycolor}`}}>
                    {category}
                </p>
            </div>
            <div className={styles.single_card_info}>
                <h3>{activityname}</h3>
                <p>{activitydesc}</p>
                <div className={styles.single_card_info_price}>
                    <p>{activityprice}</p>
                    <Link href={activityurl}style={{color:`${categorycolor}`}}><a>Scopri di più</a></Link>
                </div>
            </div>
        </div>
    )
};