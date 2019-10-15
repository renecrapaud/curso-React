import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Hello (props){
  return <h4> {props.title}</h4>
}

const HelloFlecha = (props) => <h3> {props.title}</h3>

class HelloClass extends Component {
  render () {
    return <h3> {this.props.title}</h3>
  }
}

class Texto extends Component {
  render () {
    const TextoBool = this.props.activado ? 'on' : 'off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)
    return  <div>
              <p>{this.props.objectWithInfo.key}</p>
              <p>{this.props.arrayOfNumbers.join(', ')}</p>
              <p>{mappedNumbers.join(', ')}</p>
              <p>{TextoBool}</p>
            </div>
  }
}

class Contador extends Component {
  constructor (props) {
    super (props)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }
  state = { contador : 0 }
  render () {
    return <span>{this.state.contador}</span>
  }
}

Contador.defaultProps = {
  contadorInicial : 0
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Contador: <Contador contadorInicial={100} />
        <Hello title="Texto en función"/>
        <HelloFlecha title="Titulo flecha" />
        <HelloClass title="Titulo Clase" />
        <Texto
          arrayOfNumbers = {[2,3,10]}
          activado
          objectWithInfo = {{key: 'primer Valor ', key2: 'otro valor'}}
        />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
