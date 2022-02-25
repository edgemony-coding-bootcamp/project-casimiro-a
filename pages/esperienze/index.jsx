
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import ActivitiesSkeleton from "../../components/ActivitiesSkeleton";


const AllActivitiesFilter = dynamic(
  () => import('../../components/AllActivitiesFilter'),
  { ssr: false, loading: () => <ActivitiesSkeleton /> }
);


export default function ExperiencesArchive() 
{
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroIntern
        title={t('experience_title')}
        description={t('experience_description')}
        bgImage="https://images.unsplash.com/photo-1510253687831-0f982d7862fc"
      />
      <AllActivitiesFilter/>

    </Layout>
  );
}
