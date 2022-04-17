
import style from './Noticias.module.sass';
export default function Noticias() {
  return (
    <div style={{marginTop: '3rem'}}>
  <div className='container'  id="blog">
    <div className={style.titulo}>
    <h3>Blog da Truste</h3>
          <p>O que acontece na agência e no mercado</p>
    </div>
      <div className='block flex ' style={{ height: 'auto' }}>
          <div className={style.noticias}  >
          <div className={style.card} data-aos="fade-down"
          data-aos-duration="1000"
          >
              <img src="https://www.kangu.com.br/site/wp-content/uploads/2021/02/Estrategias-de-Marketing-1-1024x538.jpg"></img>
              <h2 className={style.title}>
              TENDÊNCIAS DO MARKETING DIGITAL PARA 2022
              </h2>
              <div>
                <p>
                O marketing digital apresentou um crescimento considerável nos últimos anos.…
                </p>
                <a href='#'>
                  Leia todo
                </a>
              </div>
            </div>
            <div className={style.card} data-aos="fade-down"
                      data-aos-duration="1500"
                      >
              <img src="https://www.kangu.com.br/site/wp-content/uploads/2021/02/Estrategias-de-Marketing-1-1024x538.jpg"></img>
              <h2 className={style.title}>
              JÁ PENSOU EM REGISTRAR A MARCA DA SUA EMPRESA? ENTENDA PORQUE O REGISTRO É UMA PARTE IMPORTANTE DA SUA ESTRATÉGIA
              </h2>
              <div>
                <p>
                A marca é o fator mais importante ao abrir um…
                </p>
                <a href='#'>
                  Leia todo
                </a>
              </div>
            </div>

            <div className={style.card} data-aos="fade-down"
                      data-aos-duration="2000"
                      >
              <img src="https://www.kangu.com.br/site/wp-content/uploads/2021/02/Estrategias-de-Marketing-1-1024x538.jpg"></img>
              <h2 className={style.title}>
              SAIBA COMO QUE ANUNCIAR NO GOOGLE ADWORDS PODE AJUDAR NA SUA EMPRESA
              </h2>
              <div>
                <p>
                O Google Adwords é uma ferramenta essencial para o marketing de uma…
                </p>
                <a href='#'>
                  Leia todo
                </a>
              </div>
            </div>
   


          </div>
        </div>
      </div>
    </div>
  )
}
