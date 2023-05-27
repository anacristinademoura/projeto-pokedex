import React, { useState } from 'react'
import './style.css'
import './scrollbar.css'

export default function Conteudo() {

    const modoEscuro = 'modo-escuro';
    const modoClaro = 'modo-claro';

    const [temaEscuro, setTemaEscuro] = useState(false)

    const alterarTema = () => {
        setTemaEscuro(!temaEscuro)
    };


    return (
        <div className={temaEscuro ? modoEscuro : modoClaro}>
            <header className='limita-secao'>
                <a href="/">
                    <img className="logo" src='/assets/pokeball.png' alt='pokebola' title='pokebola' />
                </a>
                <button id='botao-alterar-tema' onClick={alterarTema}>
                    <img className="icone-botao" src={temaEscuro ? 'assets/sun.png' : 'assets/moon.png'} alt='ícone de sol' title='Tema' />
                </button>
            </header>

            <main className='limita-secao'>
                <ul className='listagem-pokemon'>
                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>bulbasaur</span>
                            <span>#001</span>
                        </div>

                        <img className="gif" src='/assets/bulbasaur.gif' alt='Bulbasaur' title='Bulbasaur' />

                        <ul className='tipos'>
                            <li className='tipo grama'>Grama</li>
                            <li className='tipo veneno'>Veneno</li>
                        </ul>

                        <p className='descricao'>Há uma semente de planta em suas costas desde o dia que este Pókemon nasce. A semente cresce lentamente.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>ivysaur</span>
                            <span>#002</span>
                        </div>

                        <img className="gif" src='/assets/ivysaur.gif' alt='Ivysaur' title='Ivysaur' />

                        <ul className='tipos'>
                            <li className='tipo grama'>Grama</li>
                            <li className='tipo veneno'>Veneno</li>
                        </ul>

                        <p className='descricao'>Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>venusaur</span>
                            <span>#003</span>
                        </div>

                        <img className="gif" src='/assets/venusaur.gif' alt='Venusaur' title='Venusaur' />

                        <ul className='tipos'>
                            <li className='tipo grama'>Grama</li>
                            <li className='tipo veneno'>Veneno</li>
                        </ul>

                        <p className='descricao'>Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>charmander</span>
                            <span>#004</span>
                        </div>

                        <img className="gif" src='/assets/charmander.gif' alt='Charmander' title='Charmander' />

                        <ul className='tipos'>
                            <li className='tipo fogo'>Fogo</li>
                        </ul>

                        <p className='descricao'>Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>charmeleon</span>
                            <span>#005</span>
                        </div>

                        <img className="gif" src='/assets/charmeleon.gif' alt='Charmeleon' title='Charmeleon' />

                        <ul className='tipos'>
                            <li className='tipo fogo'>Fogo</li>
                        </ul>

                        <p className='descricao'>Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>charizard</span>
                            <span>#006</span>
                        </div>

                        <img className="gif" src='/assets/charizard.gif' alt='Charizard' title='Charizard' />

                        <ul className='tipos'>
                            <li className='tipo fogo'>Fogo</li>
                        </ul>

                        <p className='descricao'>Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>squirtle</span>
                            <span>#007</span>
                        </div>

                        <img className="gif" src='/assets/squirtle.gif' alt='Squirtle' title='Squirtle' />

                        <ul className='tipos'>
                            <li className='tipo agua'>Água</li>
                        </ul>

                        <p className='descricao'>Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>wartortle</span>
                            <span>#008</span>
                        </div>

                        <img className="gif" src='/assets/wartortle.gif' alt='Wartortle' title='Wartortle' />

                        <ul className='tipos'>
                            <li className='tipo agua'>Água</li>
                        </ul>

                        <p className='descricao'>É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>blastoise</span>
                            <span>#009</span>
                        </div>

                        <img className="gif" src='/assets/blastoise.gif' alt='Blastoise' title='Blastoise' />

                        <ul className='tipos'>
                            <li className='tipo agua'>Água</li>
                        </ul>

                        <p className='descricao'>Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.</p>
                    </li>

                    <li className='card-pokemon'>
                        <div className='informacoes'>
                            <span>caterpie</span>
                            <span>#010</span>
                        </div>

                        <img className="gif" src='/assets/caterpie.gif' alt='Caterpie' title='Caterpie' />

                        <ul className='tipos'>
                            <li className='tipo inseto'>Inseto</li>
                        </ul>

                        <p className='descricao'>Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}