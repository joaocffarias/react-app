import React from 'react';

import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import BoasVindas from './components/BoasVindas';
import Timer from './components/Timer';
import DisplayContextUser from './components/PraticaContexto';

function App() {
  return (
    <div>
      <HelloWorld name="Aluno" />
      <Counter initialCount={5} />
      <Toggle initialState={true}/>
      <BoasVindas firstName="Matuzalém" />
      <BoasVindas firstName="Noé" lastName="da Silva" />
      <Timer/>
      <DisplayContextUser/>
    </div>
  );
}

export default App;
