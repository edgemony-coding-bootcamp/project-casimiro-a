
import SimpleCard from '../SimpleCard';
import styles from './CitiesGrid.module.scss';
import Link from 'next/link';


const CitiesGrid = (props) =>
{
    const cities = props.data || [];

    return (
        <div className={styles.wrapper}>
            

               { cities.map((city, index) => 
                <Link href={`citta/${city.id}`}>
                    <a>
                    <SimpleCard key={index} text={city.name} image={city.cover_image_url} />
                    </a>
                </Link>
                )}
            
        </div>
    );
};


export default CitiesGrid;