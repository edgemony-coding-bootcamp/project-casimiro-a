
import styles from './Activities.module.scss'
import ActivityCard from '../ActivityCard'
import Link from 'next/link'
import SectionTitle from '../SectionTitle';

const Activities = ({ data, showTitle = true }) => 
{
    let activities = [];
    
    if(data)
    {
        activities = data.data.filter((value) => value.retail_price.value > 0);
    }

    return (
        <section className={styles.wrapper_activities}>
            {showTitle &&
                <SectionTitle 
                    title = "Esperienze popolari:" 
                    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    path = '/esperienze'
                    btntext = 'Visualizza tutte le esperienze'
                    btncolor = '#E71D36'
                />
            }
            <div className={styles.wrapper_activities_cards}>
                {
                    activities.map((activity) => 
                        <Link key={activity.uuid} href={`/esperienze/${activity.id}`}>
                            <a>
                                <ActivityCard image={activity.cover_image_url} 
                                    title={activity.title}
                                    text={activity.description}
                                    price={activity.retail_price.formatted_value}
                                    category={activity.verticals[0]}
                                    />    
                            </a>
                        </Link>
                    )
                }
            </div>
        </section>
    );
};

export default Activities;