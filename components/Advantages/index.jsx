
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import InfoIconBox from "../InfoIconBox";
import SectionTitle from "../SectionTitle";
import styles from './Advantages.module.scss'

export default function Advantages()
{
    const { t } = useTranslation();

    return(
        <section className={styles.wrapper_advantages}>
            <SectionTitle 
                showBtn={false} 
                title={t('advantages_section_title')}
                description={t('advantages_section_description')}
            />
            <div className={styles.wrapper_advantages_iconbox}>
                <InfoIconBox 
                    icon={1} 
                    title={t('advantages_title1')}
                />
                <InfoIconBox 
                    icon={2} 
                    title={t('advantages_title2')}
                />
                <InfoIconBox 
                    icon={3} 
                    title={t('advantages_title3')}
                />
                <InfoIconBox 
                    icon={4} 
                    title={t('advantages_title4')}
                />
            </div>
        </section>
    )
}