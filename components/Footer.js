import style from './Footer.module.sass'

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>


        <div className={style.descricao}>
          <div>
            <h2>EMAIL</h2>
            <p><i class="uil uil-envelope"></i> contato@andreorozco.com.br</p>
          </div>
          <div>
            <h2>Whatsapp</h2>
            <p>      <i class="uil uil-whatsapp"></i>
              11 97783-6066</p>
          </div>
        </div>

        <div className={style.copyright} >Copyright © 2021. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
