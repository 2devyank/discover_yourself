import { User } from '@/context/User'
import { store } from '@/store'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import PrimarySearchAppBar from './components/Appbar'

export default function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store} >
    <User>
      <PrimarySearchAppBar/>
    <Component {...pageProps} />
    </User>
  </Provider>
  

}
