import style from './Portfolio.module.sass'

export default function Portfolio() {
  const itens = [{
    titulo: 'Grupo Aval',
    label: 'Acessoria de cobrança',
    img: './portfolio/grupoaval.png'
  },
  {
    titulo: 'Zapparoli Odontologia',
    label: 'Saude e bem-estar',
    img: './portfolio/odonto.png'
  },
  {
    titulo: 'Dream Signus',
    label: 'Encapsulados',
    img: './portfolio/dream.png'
  },
  {
    titulo: 'PagueJá Online',
    label: 'Acessoria de cobrança digital',
    img: './portfolio/pagueja.png'
  },
  {
    titulo: 'Cobisa',
    label: 'Dropshipping',
    img: './portfolio/cobisa.png'
  },
  {
    titulo: 'Dieta Corporal',
    label: 'Loja esportiva',
    img: './portfolio/corporal.png'
  },
  
  {
    titulo: 'Evolder',
    label: 'Moda masculina',
    img: './portfolio/evolder.png'
  }]
  return (
  <>
     <div className={style.depoimento}>

<div className='fullscreen'>
<div className={style.container}>
<h3 className={style.title}>Portfólio</h3>
<p className={style.paragraph}>
As marcas que acreditam no nosso trabalho
</p>

<div className={style.itens}> 
{itens.map((item, index) => (
  <div className={style.item} data-aos="zoom-in-up"
  data-aos-easing="linear"
  data-aos-duration={index * 200}> 
<div className={style.label}>
    <h3>{item.titulo}</h3>
    <p>{item.label}</p>
  </div>
  <img src={item.img} />
</div>
))}





</div>

</div>
</div>
</div>
    </>
  )
}
