import React from 'react'
import Logo from '../../assets/pokeball.png';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';
import './style.css'

const Topo = (props) => {
    return (
        <header>
            <a href="/">
                <img className="logo" src={Logo} alt='pokebola' title='pokebola' />
            </a>
            <button id='botao-alterar-tema' onClick={props.alterarTema}>
                <img className="icone-botao" src={props.temaEscuro ? iconeSol : iconeLua} alt='ícone de sol' title='Tema' />
            </button>
        </header>
    )
}

export default Topo