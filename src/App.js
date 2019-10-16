import React, {Component} from 'react';
import SeccionCondicional from './secciones/condicional'
import './App.css';

function App() {
  const numeros = [1, 1, 3, 4, 5]
  return (
    <div className="App">
        <h4> Listas </h4>
        {numeros.map((number, index) =>
          {return <p key={index}> Soy el numero {number} </p> }
        )}
    </div>
  );
}

export default App;
