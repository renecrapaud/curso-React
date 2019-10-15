import React, { Component } from 'react'

class ComponenteA extends Component {
  render () {
    return <p>Componente A</p>
  }
}

class ComponenteB extends Component {
  render () {
    return <p>Componente B</p>
  }
}

function muestraCondicional(muestraA){
  if(muestraA){
    return <ComponenteA />
  } else {
    return <ComponenteB />
  }
}

export default class SeccionCondicional extends Component {
  constructor () {
    super ()
    this.state = {muestraA : false}
  }
  render () {
    return <div>
        <h4>Renderizado condicional</h4>
        {muestraCondicional(this.state.muestraA)}
      </div>
  }
}
