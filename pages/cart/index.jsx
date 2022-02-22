
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems, editCartItem, deleteCartItem } from "../../store/actions";
import { useRouter } from "next/router";
import Layout from "../../components/Layouts";
import SectionTitle from "../../components/SectionTitle";
import Image from 'next/image';
import styles from './Cart.module.scss';

const Cart = () =>
{
    
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const totalCart = 0;

    useEffect(() => 
    {
        if(session)
            dispatch(getCartItems(session.user.email));
        else if(session === null)
            router.push("/auth/signin");
    }, [session]);

    const router = useRouter();

    return (
        session ? (
            <Layout>
                <section className={styles.wrapper}>
                    <div className={styles.hero}></div>
                    <div className={styles.cart}>
                        {
                            (cartState && cartState.length &&
                                <>
                                    <SectionTitle title="Riepilogo dell'ordine" description="" showBtn={false} />
                                    <ul>
                                        {cartState.map((item) => 
                                        {
                                            totalCart += (item.quantity * item.price);
                                            return (
                                                <div className={styles.element} key={item.id}>
                                                    <li>
                                                        <div className={styles.img}>
                                                            <Image 
                                                                src={item.url} 
                                                                alt={item.title} 
                                                                layout="fill"
                                                                />
                                                        </div>
                                                        <div className={styles.titles}>
                                                            <h3>{item.title}</h3>
                                                            <span>
                                                                <button
                                                                    className={styles.minus}
                                                                    onClick={() => {
                                                                        dispatch(editCartItem(session.user.email, item.id, (item.quantity - 1)));
                                                                        setTimeout(() => window.location.reload(), 200);
                                                                    }}
                                                                >
                                                                    -
                                                                </button>
                                                                <input 
                                                                    type="number" 
                                                                    min="1" 
                                                                    max="100"
                                                                    step="1" 
                                                                    defaultValue={item.quantity}
                                                                    />
                                                                <button
                                                                    className={styles.plus}
                                                                    onClick={() => {
                                                                        dispatch(editCartItem(session.user.email, item.id, (item.quantity + 1)));
                                                                        setTimeout(() => window.location.reload(), 200);
                                                                    }}
                                                                >
                                                                    +
                                                                </button>
                                                                <button 
                                                                    className={styles.delete}
                                                                    onClick={() => dispatch(deleteCartItem(session.user.email, item.id))} 
                                                                    >
                                                                    Elimina
                                                                </button>
                                                            </span>
                                                            <div className={styles.price}>
                                                                <p>€ {parseFloat(item.price).toFixed(2)}</p>
                                                                a persona
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <hr className={styles.hr} />
                                                </div>
                                            );
                                        })}
                                    </ul>
                                    <div className={styles.totalCart}>
                                            <h2>Totale</h2>
                                            <p className={styles.totalPrice}>€ {parseFloat(totalCart).toFixed(2)}</p>
                                    </div>
                                    <button className={styles.checkoutBtn}>Vai al checkout</button>
                                </>
                            ) || 
                        <SectionTitle title="Riepilogo dell'ordine" description="Il carrello è vuoto." showBtn={false} />
                        }
                    </div>
                </section>
                </Layout>
        ) : (<></>)
    );
}

export default Cart;