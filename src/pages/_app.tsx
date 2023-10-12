import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import { inter } from '@styles/fonts'
import { Footer } from 'layout/Footer'
import { Header } from 'layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TWDNEXT</title>
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <main className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp
