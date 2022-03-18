import style from './Footer.module.sass'

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.copyright} >Copyright © 2021. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
