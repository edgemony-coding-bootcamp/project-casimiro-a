import InfoIconBox from "../InfoIconBox";
import SectionTitle from "../SectionTitle";
import styles from './Advantages.module.scss'

export default function Advantages(){
    return(
        <section className={styles.wrapper_advantages}>
            <SectionTitle 
                showBtn={false} 
                title='Vantaggi offerti da TravelHub' 
                description='Scopri perchè ti conviene scegliere TravelHub per programmare il tuo prossimo viaggio'
            />
            <div className={styles.wrapper_advantages_iconbox}>
                <InfoIconBox 
                    icon={1} 
                    title='Puoi scegliere se prenotare solo per te o se regalare una favolosa esperienza a chi vuoi tu'                        
                />
                <InfoIconBox 
                    icon={2} 
                    title='Resta sempre aggiornato con noi: aggiungiamo migliaia di nuove offerte imperdibili ogni giorno.'                        
                />
                <InfoIconBox 
                    icon={3} 
                    title='Sappiamo quanto gli imprevisti siano fastidiosi, per questo ti offriamo la cancellazione gratuita'                        
                />
                <InfoIconBox 
                    icon={4} 
                    title='Tra le nostre esperienze troverai anche attività giornaliere da vivere con chi vuoi, prenota subito!'                        
                />
            </div>
        </section>
    )
}