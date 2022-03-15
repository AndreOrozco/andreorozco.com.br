
import style from './Noticias.module.sass';
export default function Noticias() {
  return (
    <>
  
  <div className='block flex ' id="blog" style={{height: 'auto'}}>
    <div className='container  '>
    <h1>Notícias</h1>
    <div className={'row' , style.noticias}>
    <div className={style.card}>    
    <img src="https://www.kangu.com.br/site/wp-content/uploads/2021/02/Estrategias-de-Marketing-1-1024x538.jpg"></img>
            <h2 className={style.title}>
            Desenvolvimento
            </h2>
            <div>
            <p>
            Estamos na segunda quinzena de março de 2020 e já sentimos qual vai ser a toada para as próximas semanas com a chegada, de fato, do Covid-19, conhecido como Coronavírus, na nossa realidade.
Obviamente, você, leitor, deve estar bem inserido em que patamares de discussão estamos aqui pelo Brasil,
            </p>
            <a href='#'>
              Leia todo
            </a>
            </div>
          </div>
    
         
     
    </div>
    </div>
  </div>
    </>
  )
}
