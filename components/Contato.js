import style from './Footer.module.sass'
import { Parallax } from 'react-parallax';

export default function Contato() {
  return (
  <div id="contato">
  <Parallax className={style.contato}  blur={{ min: -15, max: 30 }}
        bgImage={'/background/contato.jpg'}
        bgImageAlt="the dog"
        strength={200}>

  <div className="container flex" >

  <div className={style.box} data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine">
          <h2>
Fale conosco
    </h2>
    <p>
    Nosso time está pronto para atender sua demanda. <br></br>Entre en contato conosco e vamos juntos, criar o caminho para aumentar suas vendas e expandir sua marca.</p>
    <h3>
    Atendimento
    </h3>
    <p>
    E-mail: contato@truste.digital <br></br>
    WhatsApp: (11) 97783-6066
    </p>

    <h3>Siga nossas redes sociais
</h3>
<div className='redes'>
<a>


</a>

</div>
    </div>
        <div className={style.form}>
          <form>
          <div className={style.field}>
              <label>Seu nome</label>
              <input type="text" />
            </div>
            <div className={style.field}>
            <label>Seu telefone</label>
              <input type="text" />
            </div>
            <div className={style.field}>
            <label>E-Mail</label>
              <input type="text" />
            </div>
            <div className={style.field}>
            <label>Assunto</label>
              <input type="text" />
            </div>
            <div className={style.field}>
            <label>Messagem</label>
         <textarea type="text" />
       </div>
            <div className={style.field}>
              <button className="btn enviar">
                Enviar
              </button>
            </div>
          </form>
          </div>
      
          </div>
          </Parallax>

    </div>
  )
}
