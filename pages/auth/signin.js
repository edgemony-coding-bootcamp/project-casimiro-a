
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
                        <h3>Bentornato {session.user.name}!</h3>
                        <p>Siamo felici di rivederti!</p>
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
                                        <Image className={styles.img} src="\Google__G__Logo.svg" alt="google logo" width={24} height={24} />
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