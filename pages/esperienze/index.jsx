import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import Activities from "../../components/Activities";

export async function getStaticProps() {
    const res = await fetch("https://sandbox.musement.com/api/v3/activities");
    const data = await res.json();
  
    return {
      props: {
        activities: data,
      },
    };
  }

export default function ExperiencesArchive({ activities }) {
    return(
        <Layout>
            <HeroIntern
                title="Esperienze"
                description="Sei indeciso sulla tua prossima destinazione? Sfoglia il catalogo completo delle città e lasciati ispirare da TravelHub!"
            />
            <Activities data={activities} />
        </Layout>
    );
}