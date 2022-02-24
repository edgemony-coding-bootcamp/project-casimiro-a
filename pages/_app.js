import '../styles/globals.css'
import { Provider } from "react-redux"
import { store } from "../store/store"
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../translations/i18n';
import { SessionProvider } from "next-auth/react"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps: {session, ...pageProps} })
{
  const { t } = useTranslation();

  axios.defaults.headers.common = {...axios.defaults.headers.common, ...(t('FETCH_HEADERS'))};

  return (
    <SessionProvider session={session}>
      <Provider store ={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )}

export default MyApp
