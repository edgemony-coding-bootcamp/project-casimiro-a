
import SectionTitle from "../SectionTitle";
import ActivityCard from "../ActivityCard";
import styles from '../Activities/Activities.module.scss';

const ActivitiesSkeleton = () =>
{
    return (
        <section className={styles.wrapper_activities}>
            <SectionTitle skeleton/>
            <div className={styles.wrapper_activities_cards}>
                <a><ActivityCard skeleton/></a>
                <a><ActivityCard skeleton/></a>
                <a><ActivityCard skeleton/></a>
                <a><ActivityCard skeleton/></a>
            </div>
        </section>
    );
}

export default ActivitiesSkeleton;
