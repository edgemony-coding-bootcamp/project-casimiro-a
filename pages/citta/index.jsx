import Header from '../../components/Header'
import HeroIntern from "../../components/HeroIntern";
import CitiesGrid from '../../components/CitiesGrid';
import Footer from '../../components/Footer'

export default function CitiesArchive() {
    return(
        <>
            <Header />
            <HeroIntern title="città" description="Sei indeciso sulla tua prossima destinazione? Sfoglia il catalogo completo delle città e lasciati ispirare da TravelHub!"/>
            <CitiesGrid data={[{},{},{},{},{},{}]}/>
            <Footer />
        </>
    )
}