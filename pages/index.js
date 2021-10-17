import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>André Orozco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <div className="slider">
          <div className="container flex">
<div className="text">
<h2>The cloud is complex.
We make it simple.</h2>
<p>The cloud computing services you need, with the predictable pricing, developer-friendly features, and scalability you’ll love.</p>
          </div>
          <div className="svg">
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M55.9,-65.6C70.4,-54.4,78.8,-34.9,78,-17.1C77.1,0.7,67,16.8,57.7,33.7C48.4,50.6,39.9,68.4,26,75C12.2,81.5,-7,76.7,-21.9,67.9C-36.8,59.1,-47.4,46.3,-58.8,31.6C-70.1,16.8,-82.2,0.1,-80.8,-15.4C-79.4,-30.9,-64.6,-45.1,-48.9,-56C-33.2,-67,-16.6,-74.7,2,-77.1C20.7,-79.5,41.4,-76.7,55.9,-65.6Z" transform="translate(100 100)" />
</svg>
  
</div>
          </div>

        </div>
      <Footer />
    </>
  )
}
