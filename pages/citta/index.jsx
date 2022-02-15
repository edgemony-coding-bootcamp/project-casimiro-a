
import dynamic from 'next/dynamic';
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import stylesTitle from "../../components/SectionTitle/SectionTitle.module.scss";
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

export default function CitiesArchive({ cities }) {
  return (
    <Layout>
      <HeroIntern
        title="città"
        description="Sei indeciso sulla tua prossima destinazione? Sfoglia il catalogo completo delle città e lasciati ispirare da TravelHub!"
      />
      <Cities newTitle="Scopri le città popolari" showBtn={false} data={cities} />
    </Layout>
  );
}
