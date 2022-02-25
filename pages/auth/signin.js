
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import { getProviders, signIn, useSession } from "next-auth/react"
import Layout from "../../components/Layouts";
import styles from "./signin.module.scss"
import Image from 'next/image';

export default function SignIn({ providers }) 
{
    const { data: session } = useSession();
    let logged = false;
    const { t } = useTranslation();

    if(session)
    {
        logged =   <div className={styles.log}>
                        <h1>{t('signin_title')} <br /> {session.user.name}!</h1>
                        <div className={styles.img}>
                            <Image className={styles.img} src={session.user.image} alt={session.user.name} height={96} width={96} />
                        </div>
                        <ul>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input id="email" value={session.user.email} readOnly/>
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input id="password" value="●●●●●●●●" readOnly/>
                            </li>
                            <li>
                                <label htmlFor="birth">{t('signin_log_birth')}</label>
                                <input id="birth" value="01/01/1990" readOnly/>
                            </li>
                            <li>
                                <label htmlFor="pan">{t('signin_log_cart')}</label>
                                <input id="pan" value="●●●● ●●●● ●●●● ●●●●" readOnly/>
                            </li>
                        </ul>
                    </div>;
    }

    return(
        <Layout>

            <div className={styles.container}>
                {
                    
                    logged ||
                        Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <div className={styles.noLog}>
                                    <h3>{t('signin_title')}!</h3>
                                    <p>{t('signin_noLog_text')} {provider.name}</p>
                                    <button className={styles.btn} onClick={() => signIn(provider.id)}>
                                        <Image src="\Google__G__Logo.svg" alt="google logo" width={24} height={24} />
                                    </button>
                                </div>
                            </div>
                    ))
                }
            </div>
        </Layout>
        )
    }

export async function getServerSideProps(){
    
    const providers = await getProviders();

    return {
        props:
        {
            providers
        }
    }
}