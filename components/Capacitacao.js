import React, { useState } from 'react';
import style from './Capacitacao.module.sass'
import Image from 'next/image'

const CapacitacaoJson = {
  itens: {
    estrategia:  [
      {label: 'Inteligência de mercado',img: './icones/alvo.gif'},
      {label: 'e-commerce',img: './icones/economizar.gif'},
      {label: 'Digital',img: './icones/ideia.gif'},
    ],
    design: [
      {label: 'Marca',img: './icones/aperto-de-mao.gif'},
      {label: 'UX',img: './icones/xicara-de-cafe.gif'},
      {label: 'Digital',img: './icones/ideia.gif'},
    ],
    desenvolvimento: [
      {label: 'Web',img: './icones/viajar-por.gif'},
      {label: 'e-commerce',img: './icones/carrinho-de-compras.gif'},
      {label: 'Mockup de produto',img: './icones/cubo-3d.gif'},
      {label: 'Campanhas',img: './icones/computador-portatil.gif'},
    ],
    conteudo: [
      {label: 'Copywriting',img: './icones/caderno.gif'},
      {label: 'Fotografia',img: './icones/digitalizacao.gif'},
      {label: 'Vídeo',img: './icones/video.gif'},
      {label: '3D',img: './icones/foguete.gif'},
    ]
  },
  links: [{
    label: 'Estratégia',
    value: 'estrategia'

  },{
    label: 'Desenvolvimento',
    value: 'desenvolvimento'

  },{
    label: 'Design',
    value: 'design'

  },{
    label: 'Estratégia',
    value: 'estrategia'

  },{
    label: 'Conteúdo',
    value: 'conteudo'

  }]
}

export default function Capacitacao() {
  const [selecionado, setSelecionado] = useState('desenvolvimento');
  return (
    <div className={style.capacitacao} id="capacitacao" >

  <div className='block'>
<div className=''>
<h3 className={style.titulo}>
Capacitação
</h3>
<p>Escolha a melhor solução para você ou sua empresa!</p>
</div>
<div className={style.nav}>
<ul>
    <li onClick={() => {setSelecionado('estrategia')}} className={(selecionado === 'estrategia') && style.active} >Estratégia</li>
    <li onClick={() => {setSelecionado('desenvolvimento')}}  className={(selecionado === 'desenvolvimento') && style.active}>Desenvolvimento</li>
    <li onClick={() => {setSelecionado('design')}} className={(selecionado === 'design') && style.active} >Design</li>
    <li onClick={() => {setSelecionado('conteudo')}} className={(selecionado === 'conteudo') && style.active} >Conteúdo</li>
    </ul>
</div>

    <div  className={'container'}>
      <div className={style.itens}>  {CapacitacaoJson.itens[selecionado].map((element,index) => (
      <div class={style.item} data-aos="zoom-in" key={index}>
        <div className={style.efeito}></div>
        <img src={element.img}/> 
        <h3>{element.label}</h3>
      </div>

  )
    
  )
  }
  </div>



    </div>
  </div>
    </div>
  )
}
