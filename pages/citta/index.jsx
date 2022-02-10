
import Layout from "../../components/Layouts"
import HeroIntern from "../../components/HeroIntern";
import CitiesGrid from '../../components/CitiesGrid';


export default function CitiesArchive() {
    return(
        <Layout>
            
            <HeroIntern title="città" description="Sei indeciso sulla tua prossima destinazione? Sfoglia il catalogo completo delle città e lasciati ispirare da TravelHub!"/>
            <CitiesGrid data={[{},{},{},{},{},{}]}/>
            
        </Layout>
    )
}