import styles from './Activities.module.scss'
import ActivityCard from '../ActivityCard'
import Link from 'next/link'

export default function Activities(props) {

    const activities = props.data || [];

    return(
        <section className={styles.wrapper_activities}>
            {/* <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>Esperienze popolari:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>                
                <Link href="/esperienze"><a>Visualizza tutte le esperienze</a></Link>
            </div>
            <div className={styles.wrapper_activities_cards}>
                <ActivityCard />
            </div> */}
            {activities.map((activity, index) =>
                <Link href={`esperienze/${activity.uuid}`}>
                    <a>
                        <ActivityCard 
                        key={index}
                        category={activity.verticals[0].name} 
                        activityname={activity.title}
                        activitydesc={activity.description}
                        activityimage={activity.cover_image_url}
                        activityprice={activity.retail_price.formatted_value}
                        activityurl={`esperienze/${activity.uuid}`}    
                        />
                    </a>
                </Link>
            )}
            

        </section>
    );
};