import styles from './Activitycard.module.scss'
import Link from 'next/link'


const colorByCategoryId = {
    1: '#011627',
    2: '#E71D36',
    3: '#FF9F1C',
    6: '#2EC4B6',
    5: '#21005D',
    7: '#410E0B',
    4: "#FF0000"
}

const ActivityCard = (props) =>
{

    const image = props.image || 'https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    const title = props.title || 'Attività';
    const text = props.text || 'Descrizione attività...';
    const price = props.price || '€ 0.00'; 
    const category =  props.category ? props.category.name : "";

    // ?
    const url = props.url || ``;

    return (
        <div className={styles.single_card}>
            <div 
                className={styles.single_card_image} 
                style={{backgroundImage: `url(${image})`}}
            >
                <p style={{backgroundColor: colorByCategoryId[props.category ? props.category.id : 1]}}>{category}</p>
            </div>
            <div className={styles.single_card_info}>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.single_card_info_price}>
                    <p>{price}</p>
                    <Link href={url}>
                           <a style={{color: colorByCategoryId[props.category ? props.category.id : 1]}}>Scopri di più</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;