
import style from './Header.module.sass';
import * as React from "react";
import Link from 'next/link'
import wp from 'services/wp';
import { scroll, smoothstep } from "react-scrolling-effects";



export default function Header() {
  const handleClick = (href) => {
    e.preventDefault();
    router.push(href);
  };
  const [menu, setMenu] = React.useState([]);
  const [sticky, setSticky] = React.useState(false);
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
  const MenuHeader = {
    menu1: [{
      id: '#capacitacao',
      label: 'Capacitação'
    },
    {
      id: '#clientes',
      label: 'Clientes'
    },
    {
      id: '#trabalhos',
      label: 'Trabalhos'
    },
    ],
    menu2: [
      {
        id: '#blog',
        label: 'Blog'
      },
      {
        id: '#contato',
        label: 'Fale conosco'
      },
    ]
  }
  const hasWindow = typeof window !== 'undefined';
  hasWindow ? window.addEventListener("scroll", event => {
    if(window.scrollY > 500) {
      setSticky(true)
    } else {
      setSticky(false)
    }
}) : null 

  return (
    <>
    
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
              {MenuHeader.menu1.map(linkl => (
                <li onClick={() => scroll(linkl.id, {
                  duration: 500,
                  effect: smoothstep
                })}>
                  <p>
                    {linkl.label}
                  </p>
                </li>
              ))
              }
            </ul>
          </nav>

          <nav className={style.menuRight}>
            <ul>
              {MenuHeader.menu2.map(linkl => (
                <li onClick={() => scroll(linkl.id, {
                  duration: 500,
                  effect: smoothstep
                })}>
                  <p>
                    {linkl.label}
                  </p>
                </li>
              ))
              }
            </ul>
          </nav>


          <nav className={style.hamburguer}>
            <ul className={style.dropdown}>
              <li>
                <p>
                  <i class="uil uil-bars"></i>
                </p>
                <ul className={style.menu}>
                  {MenuHeader.menu1.map(linkl => (
                    <li onClick={() => scroll(linkl.id, {
                      duration: 500,
                      effect: smoothstep
                    })}>
                      <p>
                        {linkl.label}
                      </p>
                    </li>
                  ))}

                  {MenuHeader.menu2.map(linkl => (
                    <li onClick={() => scroll(linkl.id, {
                      duration: 500,
                      effect: smoothstep
                    })}>
                      <p>
                        {linkl.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${style.sticky} ${sticky ? style.active : style.hidden}`}>
        <div className={style.container}>
      <div className={style.logo}>
            <Link href="#">
              <img src="./truste.svg" height={55} ></img>
            </Link>
          </div>
  
          <nav className={style.menuLeft}>
            <ul>
              {MenuHeader.menu1.map(linkl => (
                <li onClick={() => scroll(linkl.id, {
                  duration: 500,
                  effect: smoothstep
                })}>
                  <p>
                    {linkl.label}
                  </p>
                </li>
              ))
              }
            </ul>
          </nav>

          <nav className={style.menuRight}>
            <ul>
              {MenuHeader.menu2.map(linkl => (
                <li onClick={() => scroll(linkl.id, {
                  duration: 500,
                  effect: smoothstep
                })}>
                  <p>
                    {linkl.label}
                  </p>
                </li>
              ))
              }
            </ul>
          </nav>


          <nav className={style.hamburguer}>
            <ul className={style.dropdown}>
              <li>
                <p>
                  <i class="uil uil-bars"></i>
                </p>
                <ul className={style.menu}>
                  {MenuHeader.menu1.map(linkl => (
                    <li onClick={() => scroll(linkl.id, {
                      duration: 500,
                      effect: smoothstep
                    })}>
                      <p>
                        {linkl.label}
                      </p>
                    </li>
                  ))}

                  {MenuHeader.menu2.map(linkl => (
                    <li onClick={() => scroll(linkl.id, {
                      duration: 800,
                      effect: smoothstep
                    })}>
                      <p>
                        {linkl.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
      </div>
      </div>
    </>
  )
}
