
import SimpleCard from '../SimpleCard';
import styles from './CitiesGrid.module.scss';


const CitiesGrid = (props) =>
{
    const cities = props.data || [];

    return (
        <div className={styles.wrapper}>
            {
                cities.map((city) => 
                    <SimpleCard text={city.name} />
                )
            }
        </div>
    );
};


export default CitiesGrid;