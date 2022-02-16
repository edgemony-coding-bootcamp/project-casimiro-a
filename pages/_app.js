import '../styles/globals.css'
import { Provider } from "react-redux"
import { store } from "../store/store"
import axios from 'axios';
import { FETCH_HEADERS } from '../libs/variables';

function MyApp({ Component, pageProps }) 
{
  axios.defaults.headers.common = {...axios.defaults.headers.common, ...FETCH_HEADERS};

  return (
    <Provider store ={store}>
      <Component {...pageProps} />
    </Provider>
  )}

export default MyApp
