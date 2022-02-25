
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import styles from './FilterActivities.module.scss';

const FilterActivities = ({ callback }) =>
{
    const { t } = useTranslation();
    const [price, setPrice] = useState(200);
    const [maxPrice, setMaxPrice] = useState(200);
    const [category, setCategory] = useState('');

    useEffect(() => 
    {
        callback({ maxPrice: maxPrice, category: category });
    }, [callback, maxPrice, category]);
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_price}>
                {t('currency')} 0
                <input 
                    type="range" 
                    min="1" 
                    max="200" 
                    step="1" 
                    value={price} 
                    onChange={(e) => setPrice(parseInt(e.target.value))} 
                    onMouseUp={() => setMaxPrice(price)}
                />
                {t('currency')} {price}
            </div>
            <div className={styles.wrapper_category}>
                <button value="arts-culture" onClick={(e) => setCategory(e.target.value)} >{t('filterActivities_arts')}</button>
                <button 
                    value="sightseeing" 
                    onClick={(e) => setCategory(e.target.value)} 
                    style={{ backgroundColor: '#E71D36'}}
                >{t('filterActivities_sightseeing')}</button>
                <button 
                    value="food-wine" 
                    onClick={(e) => setCategory(e.target.value)} 
                    style={{ backgroundColor: '#FF9F1C'}}
                >Food & Wine</button>
                <button 
                    value="entertainment"  
                    onClick={(e) => setCategory(e.target.value)}
                    style={{ backgroundColor: '#EF482D'}}
                >{t('filterActivities_entertainment')}</button>
            </div>
        </div>
    );
};

export default FilterActivities;