import '../styles/globals.css'
import { Provider } from "react-redux"
import { store } from "../store/store"
import axios from 'axios';
import { FETCH_HEADERS } from '../libs/variables';
import { SessionProvider } from "next-auth/react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps: {session, ...pageProps} })
{
  axios.defaults.headers.common = {...axios.defaults.headers.common, ...FETCH_HEADERS};

  return (
    <SessionProvider session={session}>
      <Provider store ={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )}

export default MyApp
