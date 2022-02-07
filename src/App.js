import React from 'react';

import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className="linha">
        <Intervalo red />
      </div>
      <div className="linha">
        <Media min={0} max={0}></Media>
        <Soma min={0} max={0}></Soma>
        <Sorteio min={0} max={0}></Sorteio>
      </div>
    </div>
  );
}

export default App;
