
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import CitiesSkeleton from "../../components/CitiesSkeleton";

const Cities = dynamic(
  () => import('../../components/Cities'),
  { ssr: false, loading: () => <CitiesSkeleton />}
);

export async function getStaticProps() {
  const res = await fetch('https://sandbox.musement.com/api/v3/cities?offset=0&limit=10&sort_by=weight&without_events=no');
  const data = await res.json();

  return {
    props: {
      cities: data,
    },
  };
}

export default function CitiesArchive({ cities }) 
{
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroIntern
        title={t('city_hero_title')}
        description={t('city_hero_description')}
      />
      <Cities showBtn={false} data={cities} />
    </Layout>
  );
}
