
import styles from './ToggleLang.module.scss'
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import { useDispatch } from 'react-redux';
import { setLang } from '../../store/actions';

export default function ToggleLang() 
{
    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    let check = false;

    if(lang)
    {
        check = lang == 'en' ? true : false;
    }

    const handleChange = (e) =>
    {
        console.log('check: ' + e.target.checked);
        if(e.target.checked)
        {
            dispatch(setLang('en')); 
            i18n.changeLanguage('en');
        }
        else
        {
            dispatch(setLang('it'));
            i18n.changeLanguage('it');
        }
    }

    return(
        <label className={styles.switch}>
            <input type="checkbox" value={check} onChange={handleChange} />
            <span className={styles.slider}></span>
        </label>
    )
};