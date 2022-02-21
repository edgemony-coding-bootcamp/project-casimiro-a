import { getProviders, signIn, useSession } from "next-auth/react"
import Layout from "../../components/Layouts";
import style from "./signin.module.scss"
import Image from 'next/image';

export default function SignIn({ providers }) {
    const {data : session} = useSession();

    return(
        <Layout>
            <div className={style.container} >
               {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                </div>
              ))}
              {session ? 
              <div className={style.log}>
              <h3>Bentornato {session.user.name}!</h3>   
              <p>Siamo felici di rivederti!</p>           
              </div>
               : 
               <div className={style.noLog}>
               <h3>Bentornato!</h3>
               <p>Prosegui per accedere con {providers.google.name}</p>
               <button className={style.btn} onClick={() => signIn(providers.google.id)}>
                <Image className={style.img} src="\Google__G__Logo.svg" alt="google logo" width={24} height={24} />
              </button>
              </div>}

              {/*{session ? <p>Bentornato {session.user.name}!</p> : <p>Bentornato!</p>}*/}              
              
            </div>
        </Layout>
        )
    }

export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props:{
            providers
        }
    }
}