import styles from './SingleCity.module.scss'
import Header from '../../../components/Header'
import HeroIntern from "../../../components/HeroIntern";
import Activities from '../../../components/Activities';
import CitiesGrid from '../../../components/CitiesGrid';
import Footer from '../../../components/Footer'
import Layout from '../../../components/Layouts';
//dati per esempio
const data = {
    name: "Amsterdam",
    content: "Amsterdam è la capitale dell'Olanda, centro culturale e una delle mete preferite in Europa. Pur non essendo una città enorme, le sue caratteristiche peculiari attirano milioni di turisti per escursioni e lunghe vacanze.\nCostruita sotto il livello del mare intorno all'anno 1000, dopo una bonifica della zona, Amsterdam è nota come la “Venezia del Nord”, per i suoi numerosi canali.Amatissima dai giovani di ogni parte del mondo, che vengono in questa città per la sua folle vita notturna e per immergersi nel celebre mondo dei trasgressivi “coffe shops” e del noto quartiere a luci rosse, Amsterdam attrae anche gli appassionati d'arte, che sono attirati dai suoi ricchi musei e dalla sua raffinata architettura. Qui predomina, in particolare, lo stile rinascimentale, profuso in Olanda nel XVII secolo, che attribuisce alla città un’atmosfera davvero unica.",
    cover_image_url: "https://images-sandbox.musement.com/cover/0002/15/amsterdam_header-114429.jpeg"
};

export default function City() {
    return (
        <>
        <Layout>
            <HeroIntern cityName={data.name} cityDescription={data.content} cityImage={data.cover_image_url}/>
            <Activities />
            <CitiesGrid />
        </Layout>
        </>
    )
}