import styles from './BackToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [showBtn, setShowBtn] = useState(false);

    const handleShowBtn = () => {
        setShowBtn(window.pageYOffset > 350)
    };

    useEffect( () => {
        window.addEventListener('scroll', handleShowBtn)
    }, []);

    const handleScrollTop = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    };

    return(
        showBtn && 
        <button className={styles.backToTopBtn} onClick={handleScrollTop}>
            <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
    )
}