
import styles from './SimpleCard.module.scss';
import Image from 'next/image';

const SimpleCard = (props) =>
{
    const bigSize = props.big || false;
    const text = props.text || 'Example city/experience';
    const image = props.image || 'https://images.unsplash.com/photo-1563693267403-111c5d856e49';
    const isSkeleton = props.skeleton || false;

    let content =   <>
                        <Image 
                            src={image + (bigSize ? '?h=541&w=360&fit=crop&q' : '?h=403&w=310&fit=crop&q')}
                            alt={text}
                            layout="fill"
                        />
                        <p>{text}</p>
                    </>;
    if(isSkeleton) content = '';

    return (
        <div className={`${styles.wrapper} ${bigSize ? styles.big : ''}`}>
            {content}
        </div>
    );
};

export default SimpleCard;