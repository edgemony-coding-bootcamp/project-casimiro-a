
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems, editCartItem, deleteCartItem } from "../../store/actions";
import { useRouter } from "next/router";
import Layout from "../../components/Layouts";
import SectionTitle from "../../components/SectionTitle";
import Image from 'next/image';
import styles from './Cart.module.scss';
import {onSnapshot, collection, deleteDoc,doc, setDoc } from 'firebase/firestore';
import { database as db } from "../../firebase"

const Cart = () =>{

    const [dataCart, setDataCart] = useState({})
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const totalCart = 0;

    useEffect(
        () =>
        session &&
        onSnapshot(
          collection(db, `cart/${session.user.email}/items`),
          (snapshot) => {
            setDataCart(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
          }
        ),[session]);
    
    const handleDelete = async (item) => {
        const docRef = doc(db, `cart/${session.user.email}/items`, item.id)
        await deleteDoc(docRef)
    }    
    const handleIncrement = async (item) => {
        const docRef = doc(db, `cart/${session.user.email}/items`, item.id);
        const payload = { ...item, quantity: item.quantity + 1 };
        setDoc(docRef, payload);
    }
    const handleDecrement = async (item) => {
        const docRef = doc(db, `cart/${session.user.email}/items`, item.id);
        const payload = { ...item, quantity: item.quantity > 0 && item.quantity - 1 };
        setDoc(docRef, payload);
    }
    const router = useRouter();
    return (
        session ? (
            <Layout>
                <section className={styles.wrapper}>
                    <div className={styles.hero}></div>
                    <div className={styles.cart}>
                        {
                            (dataCart.length &&
                                <>
                                    <SectionTitle title="Riepilogo dell'ordine" description="" showBtn={false} />
                                    <ul>
                                        {dataCart.map((item) => 
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
                                                                        onClick={() => handleDecrement(item)}
                                                                >
                                                                    -
                                                                </button>
                                                                <input 
                                                                    type="number" 
                                                                    min="1" 
                                                                    max="100"
                                                                    step="1" 
                                                                    value={item.quantity}
                                                                    />
                                                                <button
                                                                    className={styles.plus}
                                                                    onClick={() => handleIncrement(item)}
                                                                >
                                                                    +
                                                                </button>
                                                                <button 
                                                                    className={styles.delete}
                                                                    onClick={() => handleDelete(item)} 
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