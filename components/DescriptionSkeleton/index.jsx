
import styles from '../ActivityDescription/ActivityDescription.module.scss';

const DescriptionSkeleton = ({ imageRight = false }) =>
{
    return (
        <section className={styles.wrapper_activity_description}>
            {
                imageRight ||
                    <div className={styles.wrapper_activity_image_skeleton}></div>
            }
            <div className={styles.wrapper_activity_info}>
                <div className={styles.wrapper_activity_info_title_skeleton}></div>
                <div className={styles.wrapper_activity_info_text_skeleton}></div>
                <div className={styles.wrapper_activity_info_text_skeleton}></div>
                <div className={styles.wrapper_activity_info_text_skeleton}></div>
                <div className={styles.wrapper_activity_info_text_skeleton}></div>
                <div className={styles.wrapper_activity_info_text_skeleton}></div>
                <div className={styles.wrapper_activity_shop}>
                    <div className={styles.wrapper_activity_shop_skeleton}></div>
                    <div className={styles.wrapper_activity_shop_skeleton}></div>
                </div>
            </div>
            {
                imageRight &&
                    <div className={styles.wrapper_activity_image_skeleton}></div>
            }
        </section>
    );
}

export default DescriptionSkeleton;