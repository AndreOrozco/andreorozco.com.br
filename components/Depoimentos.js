import style from './Depoimentos.module.sass'

export default function Depoimentos() {
  return (
  <>
     <div className={style.depoimento}>

<div className='block'>
<div className={style.container}>
<p className={style.paragraph}>
O QUE DIZEM SOBRE A TRUSTE
</p>
<h3 className={style.title}>Depoimentos</h3>
</div>
<div className={style.itens}>
<div className={style.item}>
    <blockquote >
      
      <p>
      Nós da RCJ Fire estamos muito satisfeitos com a nossa <br></br>identidade visual, idealizada pela Vertical Brand. Agradecemos a dedicação!
      </p>
      <div className='flex'>
   <img height="80px" src='empresas/sidebarlogo.png '></img>
   <h4>Camila Zaparolli
      <p>CEO</p>
    </h4>
   </div>
    </blockquote >
  </div>
  <div className={style.item}>
  <blockquote >
  <p>Muito profissionalismo e pontualidade. Responsável pelo <br></br> nosso marketing desde o lançamento do projeto até o nosso sucesso hoje!</p>
  
  <div className='flex'>
   <img height="80px" src='https://cdn.shopify.com/s/files/1/0624/2818/4789/files/Cobisa_2x-8_180x.png?v=1643582609 '></img>
   <h4>Camila Zaparolli
      <p>CEO</p>
    </h4>
   </div>
  </blockquote >

  </div>
  <div className={style.item}>
  <blockquote >

    <p>Agradecemos a Vertical Brand por todo o suporte necessário no marketing da nossa empresa!</p>
   <div className='flex'>
   <img height="80px" src='https://www.zapparoliodontologia.com.br/img/zapparoli.52eea663.svg'></img>
   <h4>Camila Zaparolli
      <p>CEO</p>
    </h4>
   </div>
   
    </blockquote >

  </div>
</div>
          </div>
      
          </div>

    </>
  )
}
