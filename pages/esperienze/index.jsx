
import dynamic from 'next/dynamic';
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import ActivitiesSkeleton from "../../components/ActivitiesSkeleton";
import ActivitiesMap from '../../components/ActivitiesMap';

const AllActivitiesFilter = dynamic(
  () => import('../../components/AllActivitiesFilter'),
  { ssr: false, loading: () => <ActivitiesSkeleton /> }
);


export default function ExperiencesArchive() {
  return (
    <Layout>
      <HeroIntern
        title="Esperienze"
        description="Hai deciso di girare il mondo in cerca di nuove emozionanti avventure? Sfoglia il catalogo completo delle esperienze offerte da TravelHub!"
        bgImage="https://images.unsplash.com/photo-1510253687831-0f982d7862fc"
      />
      <AllActivitiesFilter/>
      <ActivitiesMap />
    </Layout>
  );
}
