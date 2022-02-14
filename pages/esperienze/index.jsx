import Layout from "../../components/Layouts";
import HeroIntern from "../../components/HeroIntern";
import Activities from "../../components/Activities";
import AllActivitiesFilter from "../../components/AllActivitiesFilter";

export default function ExperiencesArchive() {
  return (
    <Layout>
      <HeroIntern
        title="Esperienze"
        description="Hai deciso di girare il mondo in cerca di nuove emozionanti avventure? Sfoglia il catalogo completo delle esperienze offerte da TravelHub!"
        bgImage="https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
      />

      <AllActivitiesFilter/>

      <Activities data={""} showTitle={false} />
    </Layout>
  );
}
