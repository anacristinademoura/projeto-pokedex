import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <li className={`card-pokemon ${props.temaEscuro ? 'modo-escuro-card' : 'modo-claro-card'}`}>
            <div className='informacoes'>
                <span>{props.nome}</span>
                <span>{props.numero}</span>
            </div>

            <img className="gif" src={props.imagem} alt={props.nome} title={props.nome} />

            <ul className='tipos'>
                <li className={props.tipo1}>{props.nomeTipo1}</li>
                <li className={props.tipo2}>{props.nomeTipo2}</li>
            </ul>

            <p className='descricao'>{props.descricao}</p>
        </li>
    )
}

export default Card