
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../store/actions';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layouts';
import SectionTitle from '../../../components/SectionTitle';
import styles from './Checkout.module.scss';

const Checkout = () =>
{
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
                                    <SectionTitle title={`Ordine N. ${Math.round((Math.random() + 1) * 723652)}`} description="" path="/cart" btntext="Torna al carrello" btncolor="#FF9F1C" />
                                    <div className={styles.summary}>
                                        <div className={styles.details}>
                                            <h3>Riepilogo dell&apos;ordine</h3>
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
                                                                    <p>€ {parseFloat(item.price).toFixed(2)}</p>
                                                                    a persona
                                                                </div>
                                                            </span>
                                                            <hr className={styles.hr} />
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                            <div className={styles.totalCart}>
                                                <h3>Totale</h3>
                                                <p className={styles.totalPrice}>€ {parseFloat(totalCart).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.payment}>
                                            <h3>Dettagli pagamento</h3>
                                            <ul>
                                                <li>
                                                    <label htmlFor="name">Nome sulla carta</label>
                                                    <input id="name" placeholder="Nome e cognome" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="pan">Numero carta</label>
                                                    <input id="pan" type="number" placeholder="●●●● ●●●● ●●●● ●●●●" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="expiration">Scadenza</label>
                                                    <input id="expiration" type="date" autoComplete="off" />
                                                </li>
                                                <li>
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input id="cvv" type="number" placeholder="XXX" autoComplete="off" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className={styles.payBtn}>Paga ora</button>
                                </>
                            :
                                <SectionTitle title="Ordine non valido" description=" Assicurati di aver aggiunto qualcosa al carrello." path="/" btntext="Torna alla home" btncolor="#FF9F1C" />
                        }
                    </section>
                </div>
            </Layout>
        ) : (<></>)
    );
}

export default Checkout;