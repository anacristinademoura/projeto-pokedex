import React from 'react'
import Card from '../Card'
import './style.css'
import './scrollbar.css'
import infoPokemon from './infoPokemons.json'


const ListagemPokemon = (props) => {
    return (
        <main className='limita-secao'>
            <ul className='listagem-pokemon'>
                {infoPokemon.map((pokemon) => (
                    <Card
                        key={pokemon.nome}
                        nome={pokemon.nome}
                        numero={pokemon.numero}
                        imagem={require('../../assets/' + pokemon.imagem)}
                        tipo1={pokemon.tipo1}
                        tipo2={pokemon.tipo2}
                        nomeTipo1={pokemon.nomeTipo1}
                        nomeTipo2={pokemon.nomeTipo2}
                        descricao={pokemon.descricao}
                        temaEscuro={props.temaEscuro}
                    />
                ))}
            </ul>
        </main>

    )
}

export default ListagemPokemon