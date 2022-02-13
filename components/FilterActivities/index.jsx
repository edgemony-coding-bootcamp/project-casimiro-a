
import { useState, useEffect } from 'react';
import styles from './FilterActivities.module.scss';

const FilterActivities = ({ callback }) =>
{

    const [maxPrice, setMaxPrice] = useState(100);
    const [category, setCategory] = useState(0);

    useEffect(() => 
    {
        callback({ maxPrice: maxPrice, category: category });
    }, [callback, maxPrice, category]);
    
    //prova filtri statici
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_price}>
                € 0
                <input type="range" min="1" max="100" step="1" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
                € {maxPrice}
            </div>
            <div className={styles.wrapper_category}>
                <button value="1" onClick={(e) => setCategory(parseInt(e.target.value))} >Arte e Musei</button>
                <button 
                    value="2" 
                    onClick={(e) => setCategory(parseInt(e.target.value))} 
                    style={{ backgroundColor: '#E71D36'}}
                >Tour e Attrazioni</button>
                <button 
                    value="3" 
                    onClick={(e) => setCategory(parseInt(e.target.value))} 
                    style={{ backgroundColor: '#FF9F1C'}}
                >Food & Wine</button>
                <button 
                    value="6"  
                    onClick={(e) => setCategory(parseInt(e.target.value))}
                    style={{ backgroundColor: '#2EC4B6'}}
                >Sport e Avventura</button>
            </div>
        </div>
    );
};

export default FilterActivities;