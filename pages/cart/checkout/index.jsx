
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../store/actions';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import '../../../translations/i18n';
import Layout from '../../../components/Layouts';
import SectionTitle from '../../../components/SectionTitle';
import styles from './Checkout.module.scss';

const Checkout = () =>
{
    const { t } = useTranslation();
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const totalCart = 0;

    useEffect(() => {
        if(session)
            dispatch(getCartItems(session.user.email));
        else if(session === null)
            router.push('/auth/signin');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const router = useRouter();

    return (
        session ? (
            <Layout>
                <div>
                    <div className={styles.hero}></div>
                    <section className={styles.wrapper}>
                        {
                            cartState && cartState.length ?
                                <>
                                    <SectionTitle 
                                        title={`${t('checkout_title')} ${Math.round((Math.random() + 1) * 723652)}`} 
                                        description="" 
                                        path="/cart" 
                                        btntext={t('checkout_button')} 
                                        btncolor="#FF9F1C" 
                                    />
                                    <div className={styles.summary}>
                                        <div className={styles.details}>
                                            <h3>{t('cart_title')}</h3>
                                            <ul>
                                            {
                                                cartState.map((item) => 
                                                {
                                                    totalCart += (item.quantity * item.price);
                                                    return (
                                                        <li key={item.id}>
                                                            <span>
                                                                <h4>x{item.quantity} {item.title}</h4>
                                                                <div className={styles.price}>
                                                                    <p>{t('currency')} {parseFloat(item.price).toFixed(2)}</p>
                                                                    {t('cart_person')}
                                                                </div>
                                                            </span>
                                                            <hr className={styles.hr} />
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                            <div className={styles.totalCart}>
                                                <h3>{t('cart_total')}</h3>
                                                <p className={styles.totalPrice}>{t('currency')} {parseFloat(totalCart).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.payment}>
                                            <h3>{t('checkout_payment_title')}</h3>
                                            <ul>
                                                <li>
                                                    <label htmlFor="name">{t('checkout_payment_name')}</label>
                                                    <input id="name" placeholder="Nome e cognome" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="pan">{t('checkout_payment_pan')}</label>
                                                    <input id="pan" type="number" placeholder="●●●● ●●●● ●●●● ●●●●" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="expiration">{t('checkout_payment_expiration')}</label>
                                                    <input id="expiration" type="date" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input id="cvv" type="number" placeholder="XXX" autoComplete="off" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className={styles.payBtn}>{t('checkout_payment_button')}</button>
                                </>
                            :
                                <SectionTitle title={t('checkout_invalid_title')} description={t('checkout_invalid_description')} path="/" btntext={t('checkout_invalid_button')} btncolor="#FF9F1C" />
                        }
                    </section>
                </div>
            </Layout>
        ) : (<></>)
    );
}

export default Checkout;