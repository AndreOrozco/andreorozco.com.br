import { useEffect,useRef  } from 'react';
import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'

export default function Slider() {
  const videoRef = useRef();

  useEffect(() => {
      setTimeout(()=>{
          videoRef.current.play()
      },5000)
  }, []);
  return (
  <>

<div className='highlight'>
<div className='bloco'> 
  <h1 className='titulo'>
  Experiência
+Tecnologia
  </h1>
  <p className='texto'>
  A Truste é uma agência global de marketing, estratégia e design digital. Oferecemos produtos, serviços e experiências digitais que influenciam a cultura, o comércio e as pessoas.
  </p>
</div>
<div className='video'>
<video
            ref={videoRef}
            loop
            muted
          >
          <source src="./lua.mp4" type="video/mp4"/>       
       </video>
</div>
</div>
      {/* <Carousel loop auto widgets={[IndicatorDots]} style={{background: '#1e165e',height: '510px'}}>
  <div style={{height: '510px' }}>

  <div>
      <h2>
        ASSASAASSA
      </h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
      </div>
      <div>
      </div>

  </div>
  <div style={{ height: '510px'}}>Frame 2</div>
</Carousel> */}
      
    </>
  )
}
