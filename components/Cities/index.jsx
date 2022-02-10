
import SimpleCard from '../SimpleCard';
import styles from './Cities.module.scss';

const Cities = ({ data }) =>
{
    let cities = data || [];

    return (
        <section className={styles.wrapper_cities}>
            <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>Città più visitate:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <a href="#">Visualizza tutte le città</a>
            </div>
            <div className={styles.wrapper_cities_cards}>
                {
                    cities.map((city) => 
                        <SimpleCard key={city.uuid}
                            text={city.name}
                            image={city.cover_image_url}
                        />
                    )
                }
            </div>
        </section>
    );
};


export default Cities;