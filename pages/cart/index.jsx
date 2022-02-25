
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems, editCartItem, deleteCartItem } from "../../store/actions";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import Layout from "../../components/Layouts";
import SectionTitle from "../../components/SectionTitle";
import Image from 'next/image';
import Link from "next/link";
import styles from './Cart.module.scss';

const Cart = () =>
{
    const { t } = useTranslation();
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const totalCart = 0;

    useEffect(() => 
    {
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
                    <section className={styles.cart}>
                        {
                            cartState && cartState.length ?
                                <>
                                    <SectionTitle title={t('cart_title')} description="" showBtn={false} />
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
                                                                    onClick={() => dispatch(editCartItem(session.user.email, item.id, (item.quantity - 1)))}
                                                                >
                                                                    -
                                                                </button>   
                                                                <input 
                                                                    type="number" 
                                                                    min="1" 
                                                                    max="100"
                                                                    step="1" 
                                                                    value={item.quantity}
                                                                    readOnly/>
                                                                <button
                                                                    className={styles.plus}
                                                                    onClick={() => dispatch(editCartItem(session.user.email, item.id, (item.quantity + 1)))}
                                                                >
                                                                    +
                                                                </button>
                                                                <button 
                                                                    className={styles.delete}
                                                                    onClick={() => dispatch(deleteCartItem(session.user.email, item.id))}
                                                                >
                                                                    {t('cart_delete')}
                                                                </button>
                                                            </span>
                                                            <div className={styles.price}>
                                                                <p>{t('currency')} {parseFloat(item.price).toFixed(2)}</p>
                                                                {t('cart_person')}
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <hr className={styles.hr} />
                                                </div>
                                            );
                                        })}
                                    </ul>
                                    <div className={styles.totalCart}>
                                            <h2>{t('cart_total')}</h2>
                                            <p className={styles.totalPrice}>{t('currency')} {parseFloat(totalCart).toFixed(2)}</p>
                                    </div>
                                    <Link href="/cart/checkout">
                                        <a>
                                            <button className={styles.checkoutBtn}>{t('cart_checkout')}</button>
                                        </a>
                                    </Link>
                                </>
                            :
                                <SectionTitle title={t('cart_title')} description={t('cart_empty')} showBtn={false} />
                        }
                    </section>
                </div>
                </Layout>
        ) : (<></>)
    );
}

export default Cart;