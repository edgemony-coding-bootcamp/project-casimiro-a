
import { getProviders, signIn, useSession } from "next-auth/react"
import Layout from "../../components/Layouts";
import styles from "./SignIn.module.scss"
import Image from 'next/image';

export default function SignIn({ providers }) 
{
    const { data: session } = useSession();
    let logged = false;

    if(session)
    {
        logged =   <div className={styles.log}>
                        <h1>Bentornato <br /> {session.user.name}!</h1>
                        <div className={styles.img}>
                            <Image className={styles.img} src={session.user.image} alt={session.user.name} height={96} width={96} />
                        </div>
                        <ul>
                            <li>
                                <label for="email">Email</label>
                                <input id="email" value={session.user.email} readOnly/>
                            </li>
                            <li>
                                <label for="password">Password</label>
                                <input id="password" value="●●●●●●●●" readOnly/>
                            </li>
                            <li>
                                <label for="birth">Data di nascita</label>
                                <input id="birth" value="01/01/1990" readOnly/>
                            </li>
                            <li>
                                <label for="pan">La tua carta</label>
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
                                    <h3>Bentornato!</h3>
                                    <p>Prosegui per accedere con {provider.name}</p>
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

export async function getServerSideProps()
{
    const providers = await getProviders();

    return {
        props:
        {
            providers
        }
    }
}