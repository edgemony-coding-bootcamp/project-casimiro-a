
import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import stylesTitle from "../../components/SectionTitle/SectionTitle.module.scss";
import dynamic from 'next/dynamic';

const Cities = dynamic(
  () => import('../../components/Cities'),
  { ssr: false, loading: () => <div>Loading...</div>}
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
      <div 
        className={stylesTitle.wrapper_title_button}
        style={{ padding: '100px 100px 0', marginBottom: '-50px' }}
      >
        <div className={stylesTitle.wrapper_title}>
          <h2>Scopri le città popolari</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <Cities big={true} showTitle={false} data={cities} />
    </Layout>
  );
}
