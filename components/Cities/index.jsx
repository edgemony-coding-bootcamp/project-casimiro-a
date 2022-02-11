import SectionTitle from '../SectionTitle';
import SimpleCard from '../SimpleCard';
import styles from './Cities.module.scss';
import Link from 'next/link';


const Cities = ({ data, showTitle = true, exceptId = 0 }) =>
{
    let cities = data || [];

    if(exceptId)
    {
        cities = cities.filter((city) => parseInt(city.id) !== exceptId);
    }

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
                    <Link key={city.id} href={`/citta/${city.id}`}>
                       <a>
                        <SimpleCard 
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