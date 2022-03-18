import style from './Parceiros.module.sass'
import { Parallax } from 'react-parallax';

export default function Parceiros() {
  return (
  <>  <Parallax 
  style={{ backgroundColor: '#1e165e', marginTop: '4rem' }}
  className={style.contato}  blur={{ min: -35, max: 35 }}
  bgImage={'/background/background_clientes.png'}
  strength={500}>
     {/* <div style={{ backgroundColor: '#1e165e', marginTop: '4rem' }}> */}
        <div className={style.container}>
          <h2 className={style.title}>Clientes</h2>
          <p className={style.paragraph}>Escolha a melhor solução para você ou sua empresa!</p>
          <div className={style.itens}>
          <div className={style.item} style={{height: '60px !important'}} data-aos="zoom-in">
              <img  src="empresas/sidebarlogo.png " alt="Grupo Aval" />
            </div>
            <div className={style.item} style={{height: '60px !important'}} data-aos="zoom-in">
              <img  src="empresas/signus.png "  alt="Grupo Aval" />
            </div>
            <div className={style.item} style={{height: '50px !important'}} data-aos="zoom-in">
              <img  src="https://www.toledopizaadvogados.com.br/images/toledo.png " alt="Grupo Aval" />
            </div>

            <div className={style.item} style={{height: '60px !important'}} data-aos="zoom-in">
              <img  src="https://www.zapparoliodontologia.com.br/img/zapparoli.52eea663.svg " alt="Grupo Aval" />
            </div>
            <div className={style.item} style={{height: '60px !important'}} data-aos="zoom-in">
              <img  src="https://cdn.shopify.com/s/files/1/0624/2818/4789/files/Cobisa_2x-8_180x.png?v=1643582609 " alt="Grupo Aval" />
            </div>
            </div>
        </div>
      </Parallax>
    </>
  )
}
