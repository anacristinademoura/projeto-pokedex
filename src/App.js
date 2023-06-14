import React, { useState } from "react";
import Topo from "./componentes/Topo";
import ListagemPokemon from "./componentes/ListagemPokemon";
import './App.css'

const App = () => {

  const [temaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro)
  };

  return (
    <div className={temaEscuro ? 'modo-escuro' : 'modo-claro'}>
      <Topo alterarTema={alterarTema} temaEscuro={temaEscuro} />
      <ListagemPokemon temaEscuro={temaEscuro}/>
    </div>
  );
};

export default App;
