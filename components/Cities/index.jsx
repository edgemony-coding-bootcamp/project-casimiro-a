import SectionTitle from '../SectionTitle';
import SimpleCard from '../SimpleCard';
import styles from './Cities.module.scss';
import Link from 'next/link';


const Cities = ({ data, showTitle = true }) =>
{
    let cities = data || [];

    return (
        <section className={styles.wrapper_cities}>
            { showTitle &&
                <SectionTitle
                 
                title = "Città più visitate:" 
                description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                path = '/città'
                btntext = 'Visualizza tutte le città'
                btncolor = '#FF9F1C'
                />
            }
            <div className={styles.wrapper_cities_cards}>
                {
                    cities.map((city) => 
                    <Link href={`citta/${city.id}`}>
                       <a>
                        <SimpleCard key={city.uuid}
                            text={city.name}
                            image={city.cover_image_url}
                        />
                       </a>
                    </Link>
                    )
                }
            </div>
        </section>
    );
};


export default Cities;