
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import SectionTitle from '../SectionTitle';
import SimpleCard from '../SimpleCard';
import Link from 'next/link';
import styles from './Cities.module.scss';


const Cities = ({ data, showTitle = false, newTitle = false, showBtn = true, exceptId = 0, maxCities = 10 }) =>
{
    let cities = data || [];
    const { t } = useTranslation();

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
                        title = {newTitle ? newTitle : t('cities_section_title')}
                        description = {t('cities_section_description')}
                        path = '/citta'
                        btntext = {t('cities_section_button')}
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