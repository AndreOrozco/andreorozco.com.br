import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Capacitacao from '@components/Capacitacao'
import Slider from '@components/Slider'
import Contato from '@components/Contato'
import Parceiros from '@components/Parceiros'
import Noticias from '@components/Noticias'
import Depoimentos from '@components/Depoimentos'
import Portfolio from '@components/Portfolio'


export default function Home() {
  return (
    <>
      <Head>
        <title>André Orozco</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.0/css/solid.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.0/css/before.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.0/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.0/css/thinline.css"
        />
      </Head>
      <Header />
      <div className='bgEffect'></div>
      <Slider/>
      <Capacitacao />
      <Parceiros />
      <Portfolio />
      <Noticias/>
      <Contato />
      {/* <Depoimentos /> */}
      <Footer />
    </>
  )
}
