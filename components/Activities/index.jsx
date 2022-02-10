
import styles from './Activities.module.scss'
import ActivityCard from '../ActivityCard'
import Link from 'next/link'


const Activities = ({ data }) => 
{
    let activities = [];
    
    if(data)
    {
        activities = data.data.filter((value) => value.retail_price.value > 0);
    }

    return (

        <section className={styles.wrapper_activities}>
            {/* <div className={styles.wrapper_title_button}>
                <div className={styles.wrapper_title}>
                    <h2>Esperienze popolari:</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>                
                <Link href="/esperienze"><a>Visualizza tutte le esperienze</a></Link>
            </div>
            <div className={styles.wrapper_activities_cards}>

                {
                    activities.map((activity) => 
                        <ActivityCard key={activity.uuid} 
                            image={activity.cover_image_url} 
                            title={activity.title}
                            text={activity.description}
                            price={activity.retail_price.formatted_value}
                            category={activity.verticals[0]}
                            activityurl={`esperienze/${activity.uuid}`} 
                        />    
                    )
                }
            </div>
        </section>
    );
};

export default Activities;

