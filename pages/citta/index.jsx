import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import Cities from "../../components/Cities";

export async function getStaticProps() {
  const res = await fetch("https://sandbox.musement.com/api/v3/cities");
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
        description="Sei indeciso sulla tua prossima esperienza? Sfoglia il catalogo completo delle attività e lasciati ispirare da TravelHub!"
      />
      <Cities data={cities} />
    </Layout>
  );
}
