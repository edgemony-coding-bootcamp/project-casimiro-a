import styles from './SingleExperience.module.scss'

import HeroIntern from "../../../components/HeroIntern";
import Activities from '../../../components/Activities';
import Cities from '../../../components/Cities';

import Layout from '../../../components/Layouts';
//dati per esempio
const data = {
    name: "Passeggiate e degustazioni gastronomiche a Sydney",
    content: "Fai un viaggio serale nella scena emergente dei piccoli bar di Sydney e scopri i nuovi punti negli edifici storici e nei vicoli.",
    "about": "Questo tour enogastronomico di Sydney ti darà un assaggio di ciò che la città ha da offrire: nel corso della serata, in un piccolo gruppo, visiterai tre diversi piccoli bar, tutti nascosti in scantinati, vicoli, vecchi strade carrabili, banchine di carico e altri angoli difficili da trovare. Trascorreremo circa 45 minuti in ogni sede, offrendoti un sacco di tempo per assaggiare degli snack e / o gustare un drink ed è raramente la stessa cosa due volte! Potremmo essere trattati per la pizza una volta o tapas o gnocchi un'altra volta, innaffiati magari con un bicchiere di vin brulè in inverno o sangria in estate. Vieni con una mente aperta per ciò che ti viene posto di fronte! Tra una sosta e l'altra, sarai guidato lungo alcune delle strade più interessanti di Sydney, dove potrai scoprire altri luoghi, vedere fantastici street art, spiare spazi intriganti e imparare dove la gente del posto va davvero dopo l'orario di lavoro. Inizieremo il nostro tour alla cupola di vetro di Wynyard Park e finiremo nella zona di Kent Street, dopo tre ore di esplorazione del centro città attraverso gli angoli nascosti nel centro di Sydney.",
    cover_image_url: "https://images-sandbox.musement.com/cover/0003/06/thumb_205180_cover_header.jpeg?w=540"
};

export default function City() {
    return (
        <>
        <Layout>
            <HeroIntern 
                title={data.name} 
                description={data.content} 
                bgImage={data.cover_image_url}                    
            />
            <Cities />
        </Layout>
        </>
    )
}