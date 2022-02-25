
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import ActivityCard from '../ActivityCard'
import Link from 'next/link'
import SectionTitle from '../SectionTitle';
import styles from './Activities.module.scss'

const Activities = ({ data, showTitle = true }) => 
{
    let activities = [];
    const { t } = useTranslation();
    
    if(data)
    {
        activities = data.data.filter((value) => value.retail_price.value > 0);
    }

    return (
        <section className={styles.wrapper_activities}>
            {showTitle &&
                <SectionTitle 
                    title = {t('activities_section_title')} 
                    description = {t('activities_section_description')}
                    path = '/esperienze'
                    btntext = {t('activities_section_button')}
                    btncolor = '#E71D36'
                />
            }
            <div className={styles.wrapper_activities_cards}>
                {
                    activities.map((activity) => 
                        <Link href={`/esperienze/${activity.uuid}`} key={activity.uuid}>
                            <a>
                                <ActivityCard 
                                    image={activity.cover_image_url} 
                                    title={activity.title}
                                    text={activity.description}
                                    price={activity.retail_price.formatted_value}
                                    category={activity.verticals[0]}
                                    url={`/esperienze/${activity.uuid}`}
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