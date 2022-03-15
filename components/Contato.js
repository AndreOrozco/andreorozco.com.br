import style from './Footer.module.sass'

export default function Contato() {
  return (
  <>
  <div className="container flex">
        <div className={style.form}>
          <form>
            <div className={style.header}>
          <h2>
    Se interessou? 
  
    </h2>
    <p>
    Entre em contato conosco!</p>
    </div>

          <div className={style.field}>
              <label>Nome</label>
              <input type="text" placeholder="Nome"/>
            </div>
            <div className={style.field}>
            <label>Telefone</label>
              <input type="text" placeholder="Telefone"/>
            </div>
            <div className={style.field}>
            <label>E-Mail</label>
              <input type="text" placeholder="E-Mail"/>
            </div>
            <div className={style.field}>
            <label>Messagem</label>
         <textarea type="text" placeholder="Messagem"/>
       </div>
            <div className={style.field}>
              <button className="btn enviar">
                Enviar
              </button>
            </div>
          </form>
          </div>
      
          </div>
    </>
  )
}
