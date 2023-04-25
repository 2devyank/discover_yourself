import { taskApi } from '@/features/Register'
import '@/styles/globals.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ApiProvider api={taskApi}>
    <Component {...pageProps} />
  </ApiProvider>

}
