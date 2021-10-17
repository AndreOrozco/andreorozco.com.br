

import style from './Header.module.sass';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Header() {
  const handleClick = (href) => {
    e.preventDefault();
    router.push(href);
  };
  const menu = [
    {
      href: "/aline/curriculo",
      nome: "Meu curriculo",
    },
    {
      href: "/aline/#servicos",
      nome: "Serviços",
    },
    {
      href: "/aline/contato",
      nome: "Agende uma conversa",
      classe: style.active
    },
  ];
  return <div className={style.header}>
    <div className="container flex">
<div className={style.logo}>
      <img src="./logo.svg" height={70}></img>
    </div>
    <nav className={style.menu}>
      <ul>
        {menu.map((item,i) => (
          <li className={item.classe} key={i}>
            <a onClick={() => router.push(`${item.href}`)}>
              {item.nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
  </div>
}
