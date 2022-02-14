import styles from './Reviews.module.scss'
import Image from "next/image";

export default function Reviews() {
    const score = () => {
        return Math.random() * (5.1 - 4.0) + 4.0
    };

    return (
        <section className={styles.wrapper_reviews}>
            <div className={styles.wrapper_reviews_info}>
                <h3>Recensioni:</h3>
                <p>{score().toFixed(1)} su 5.0</p>
                <Image 
                    src="../../reviews-score.png" 
                    alt="stars" 
                    width="100px" 
                    height="20px"
                />
            </div>
            <div className={styles.wrapper_reviews_testimonials}>
                <Image 
                        src="../../testimonials.png" 
                        alt="testimonials" 
                        width="250px" 
                        height="90px"
                />
            </div>
        </section>
    );
};