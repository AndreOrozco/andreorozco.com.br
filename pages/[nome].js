import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import wp from 'services/wp'
import ReactHtmlParser from 'react-html-parser'; 

const Pages = () => {
  const router = useRouter()
  const { nome } = router.query;
  const [page, setPage] = useState({});
  useEffect(() => {
    wp.get(`/pages/?slug=${nome}&_embed` ).then(res => {
    setPage(res.data[0])
    });
  },[nome]);


  return (
    <>
      <Head>
        <title>André Orozco ~ {page?.title?.rendered}</title>
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
        <Header/>

        {ReactHtmlParser (page?.content?.rendered) }

        <Footer />
    </>)
}

export default Pages