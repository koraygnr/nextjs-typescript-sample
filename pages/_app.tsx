import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UsersContextProvider } from "../contexts/UsersContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UsersContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UsersContextProvider>
  )
}
