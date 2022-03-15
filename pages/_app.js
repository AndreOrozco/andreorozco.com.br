import React , {useEffect} from 'react'
import '@styles/reset.scss'
import '@styles/globals.sass'
import '@styles/slider.scss'
import '@styles/styles.scss'
import 'aos/dist/aos.css'

import AOS from 'aos';
function Application({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  },[])
  return <Component {...pageProps} />
}

export default Application
