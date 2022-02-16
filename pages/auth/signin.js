import { getProviders, signIn, useSession } from "next-auth/react"
import Layout from "../../components/Layouts";
import style from "./signin.module.scss"

export default function SignIn({ providers }) {
    const {data : session} = useSession();


    return(
        <Layout>

            <div className={style.container}>
               {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
              {session ? <p>`ciao {session.user.name} sei loggato`</p> : <p>non sei loggato</p>}
            </div>
          ))}
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