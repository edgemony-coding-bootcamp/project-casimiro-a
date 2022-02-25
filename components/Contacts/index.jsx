
import { useTranslation } from 'react-i18next';
import '../../translations/i18n';
import SectionTitle from '../SectionTitle'
import styles from './Contacts.module.scss'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {  faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contacts({showBtn}) 
{
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section className={styles.wrapper_container}>
            <SectionTitle 
                title={t('contacts_section_title')}
                description={t('contacts_section_description')}
                path='/about'
                btntext={t('contacts_section_button')}
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
                    <p>{t('contacts_newsletter_text')}</p>   
                    <div className={styles.newsletter}>
                        <input type="radio" name="newsletter" id="newsletter-si" value="si" />
                        <label htmlFor="newsletter-si">Voglio iscrivermi!</label>
                        <input type="radio" name="newsletter" id="newsletter-no" value="no" /> 
                        <label htmlFor="newsletter-no">No, grazie.</label>
                    </div>
                </div>
                <div className={styles.contacts_form}>
                    <form>
                        <h3>{t('contacts_newsletter_input_title')}</h3>
                        <div className={styles.input_row}>
                            <div className={styles.input_column}>
                                <label htmlFor='name'> {t('contacts_newsletter_input_name')}</label>
                                <input type='text' name='name' placeholder={t('contacts_newsletter_input_name')} required/>
                            </div>
                            <div className={styles.input_column}>
                                <label htmlFor='surname'> {t('contacts_newsletter_input_surname')}</label>
                                <input type='text' name='surname' placeholder={t('contacts_newsletter_input_surname')} required/>
                            </div>
                        </div>
                        <div className={styles.input_row}>
                            <div className={styles.input_column}>
                                <label htmlFor='email'>Email</label>
                                <input type='email' name='email' placeholder='Email' required/>
                            </div>
                            <div className={styles.input_column}>
                                <label htmlFor='phone'> {t('contacts_newsletter_input_telephone')}</label>
                                <input type='tel' name='phone' placeholder={t('contacts_newsletter_input_telephone')}/>
                            </div>
                        </div>
                        <label htmlFor="testoForm">{t('contacts_newsletter_input_comment')}</label>
                        <textarea name="testoForm" id="testoForm" placeholder={t('contacts_newsletter_input_comment')} required></textarea>
                        <div>
                            <input type='checkbox' name='privacy' id='privacy' required/>
                            <label htmlFor='privacy'> {t('contacts_newsletter_input_privacy')}</label>
                        </div>
                        <button onClick={handleSubmit}>{t('contacts_newsletter_input_send')}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}