
import styles from './SimpleCard.module.scss';

const SimpleCard = (props) =>
{
    const bigSize = props.big || false;
    const text = props.text || 'Example city/experience';
    const image = props.image || 'https://images.unsplash.com/photo-1563693267403-111c5d856e49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';

    return (
        <div 
            className={`${styles.wrapper} ${bigSize ? styles.big : ''}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <p>{text}</p>
        </div>
    );
};

export default SimpleCard;