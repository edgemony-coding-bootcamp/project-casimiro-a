import SectionTitle from '../SectionTitle'
import styles from './Contacts.module.scss'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contacts({showBtn}) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <section className={styles.wrapper_container}>
            <SectionTitle 
                title='Contattaci'
                description='Per qualsiasi informazione siamo a tua disposizione'
                path='/about'
                btntext="Scopri di più su TravelHub →"
                btncolor='#2EC4B6'
                showBtn={showBtn}
            />
            <div className={styles.wrapper_container_contacts}>
                <div className={styles.contacts_info}>
                    <h3>Contatti</h3>
                    <ul>
                        <li><FontAwesomeIcon className={styles.icons} icon={faEnvelope} /> info@travelhub.com</li>
                        <li><FontAwesomeIcon className={styles.icons} icon={faPhoneAlt} /> +39 123 456 7890</li>
                        <li>
                            <div className={styles.brandsIcons}>
                            <FontAwesomeIcon className={styles.icons} icon={faInstagram}/>
                            <FontAwesomeIcon className={styles.icons} icon={faFacebook}/>
                            <FontAwesomeIcon className={styles.icons} icon={faTwitter}/>
                            </div>   
                        </li>   
                    </ul>
                    <h3>Newsletter</h3>
                    <p>Iscriviti alla nostra newsletter per restare sempre aggiornato sulle stupende esperienze proposte da TravelHub</p>   
                    <div className={styles.newsletter}>
                        <input type="radio" name="newsletter" id="newsletter-si" value="si" />
                        <label htmlFor="newsletter-si">Voglio iscrivermi!</label>
                        <input type="radio" name="newsletter" id="newsletter-no" value="no" /> 
                        <label htmlFor="newsletter-no">No, grazie.</label>
                    </div>
                </div>
                <div className={styles.contacts_form}>
                    <form>
                        <h3>Invia un messaggio</h3>
                        <div className={styles.input_row}>
                            <div className={styles.input_column}>
                                <label htmlFor='name'> Nome</label>
                                <input type='text' name='name' placeholder='Nome' required/>
                            </div>
                            <div className={styles.input_column}>
                                <label htmlFor='surname'> Cognome</label>
                                <input type='text' name='surname' placeholder='Cognome' required/>
                            </div>
                        </div>
                        <div className={styles.input_row}>
                            <div className={styles.input_column}>
                                <label htmlFor='email'>Email</label>
                                <input type='email' name='email' placeholder='Email' required/>
                            </div>
                            <div className={styles.input_column}>
                                <label htmlFor='phone'> Telefono</label>
                                <input type='tel' name='phone' placeholder='Telefono'/>
                            </div>
                        </div>
                        <label htmlFor="testoForm">Scrivi qui il tuo commento</label>
                        <textarea name="testoForm" id="testoForm" placeholder="Scrivi qui il tuo commento" required></textarea>
                        <div>
                            <input type='checkbox' name='privacy' id='privacy' required/>
                            <label htmlFor='privacy'> Autorizzo il trattamento dei miei dati personali in base all’art. 13 del D. Lgs. 196/2003
                            e all’art. 13 GDPR 679/16.*</label>
                        </div>
                        <button onClick={handleSubmit}>Invia</button>
                    </form>
                </div>
            </div>
        </section>
    )
}