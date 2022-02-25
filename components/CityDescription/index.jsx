
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import Image from 'next/image'
import Link from 'next/link'
import styles from './CityDescription.module.scss'

export default function CityDescription({
    image = 'https://images.unsplash.com/photo-1510253687831-0f982d7862fc',
    title = 'questa città',
    description = 'Descrizione non disponibile',
    more = '',
    id = ''
    }) {

        const { t } = useTranslation();

    return(
        <section className={styles.wrapper_city_description}>
            <div className={styles.wrapper_city_info}>
                <h2>{t('cityDescription_title')} {title}</h2>
                <p>{description}</p>
                <p>{more}</p>
                <Link href={`/citta/${id}`}>
                    <a>{t('cityDescription_title')}</a>
                </Link>
            </div>
            <div className={styles.wrapper_city_image}>
                <Image 
                    src={`${image}?h=400&w`}
                    alt={title}                  
                    width='600px'
                    height='400px'
                />
            </div>
        </section>
    )
};