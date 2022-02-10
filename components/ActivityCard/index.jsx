import styles from './Activitycard.module.scss'

const ActivityCard = (props) =>
{
    const image = props.image || 'https://images.unsplash.com/photo-1523867904486-8153c8afb94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    const category = props.category || "Category";
    const title = props.title || 'Attività';
    const text = props.text || 'Descrione attività...';
    const price = Number(props.price) || 0; 
    const url = props.url || '#';

    return (
        <div className={styles.single_card}>
            <div 
                className={styles.single_card_image} 
                style={{backgroundImage: `url(${image})`}}
            >
                <p style={{backgroundColor:`${'#000'}`}}>{category}</p>
            </div>
            <div className={styles.single_card_info}>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.single_card_info_price}>
                    <p>{`€ ${price.toFixed(2)}`}</p>
                    <a href={url} 
                        style={{color:`${'#000'}`}}
                    >
                            Scopri di più
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ActivityCard;