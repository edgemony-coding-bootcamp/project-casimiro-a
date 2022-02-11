import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import Cities from "../../components/Cities";

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
      <Cities big={true} data={cities} />
    </Layout>
  );
}
