
import SectionTitle from '../SectionTitle';
import SimpleCard from '../SimpleCard';
import styles from './Cities.module.scss';
import Link from 'next/link';


const Cities = ({ data, showTitle = false, newTitle = false, showBtn = true, exceptId = 0, maxCities = 10 }) =>
{
    let cities = data || [];

    if(exceptId)
    {
        cities = cities.filter((city) => parseInt(city.id) !== exceptId);
    }

    if(maxCities && cities.length > maxCities)
    {
        cities = cities.slice(0, maxCities);
    }

    return (
        <section className={styles.wrapper_cities}>

            {
                showTitle &&
                    <SectionTitle
                        title = {newTitle ? newTitle : "Città più visitate"}
                        description = "Scopri le mete più ambite su TravelHub"
                        path = '/citta'
                        btntext = 'Visualizza tutte le città →'
                        btncolor = '#FF9F1C'
                        showBtn = {showBtn}
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