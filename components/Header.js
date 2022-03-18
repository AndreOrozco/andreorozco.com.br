
import style from './Header.module.sass';
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import wp from 'services/wp';
import { scroll, smoothstep } from "react-scrolling-effects";
export default function Header() {
  const handleClick = (href) => {
    e.preventDefault();
    router.push(href);
  };
  const [menu, setMenu] = useState([]);
  // useEffect(() => {

  //   wp.get('/pages').then(res => {
  //     var resMenu = [];
  //     var links = res.data
  //     console.log(links)
  //     links.forEach(item => {
  //       var tratamento = {
  //         href: item.slug,
  //         nome: item.title.rendered,
  //       };
  //       resMenu.push(tratamento);
  //     })
  //     setMenu(resMenu)
  //   })

  // },[]);

  return (
    <div>
      <div>
        <div className={style.services} >
          <div className="container flex m-auto">
            <div className={style.redes}>
            <a className={style.admin}>Acessar area cliente</a>
              <a className={style.btn}>
                <i class="uil uil-facebook-f"></i>
              </a>
              <a className={style.btn}>
                <i class="uil uil-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={style.header}>



        <div className="container flex m-auto">
          <div className={style.logo}>
            <Link href="#">
              <img src="./truste.svg" height={55} ></img>
            </Link>
          </div>
          <nav className={style.menuLeft}>
            <ul>
        
              <li >
                <p >
                  Capacitação
                </p>

              </li>
              <li>
                <p>         Clientes
                </p>

              </li>
              <li>
                <p>         Trabalhos
                </p>

              </li>
         
  
            </ul>
          </nav>

          <nav className={style.menuRight}>
            <ul>
   
         
              <li onClick={() => scroll("#blog", {
                duration: 500,
                effect: smoothstep
              })}>
                <p>
                  Blog
                </p>

              </li>
              <li>
                <p>
                  Fale conosco
                </p>


              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
