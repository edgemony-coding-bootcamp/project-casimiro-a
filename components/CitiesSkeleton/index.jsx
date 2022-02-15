
import SectionTitle from "../SectionTitle";
import SimpleCard from "../SimpleCard";
import styles from '../Cities/Cities.module.scss';

const CitiesSkeleton = () =>
{
    return (
        <section className={styles.wrapper_cities}>
            <SectionTitle skeleton/>
            <div className={styles.wrapper_cities_cards}>
                <a><SimpleCard skeleton/></a>
                <a><SimpleCard skeleton/></a>
                <a><SimpleCard skeleton/></a>
                <a><SimpleCard skeleton/></a>
                <a><SimpleCard skeleton/></a>
            </div>
        </section>
    );
}

export default CitiesSkeleton;