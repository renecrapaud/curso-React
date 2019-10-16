import React, { Component } from 'react'

class LoginButton extends Component {
  render () {
    return <button>Iniciar sesión</button>
  }
}

class LogoutButton extends Component {
  render () {
    return (
      <div>
        <p> Bienvenido usuario </p>
        <button> Cerrar sesión </button>
      </div>
    )
  }
}

/* function muestraCondicional(muestraA){
  if(muestraA){
    return <ComponenteA />
  } else {
    return <ComponenteB />
  }
} */

export default class SeccionCondicional extends Component {
  constructor () {
    super ()
    this.state = {isUserLogged : true}
  }
  render () {
    return <div>
        <h4>Renderizado condicional</h4>
        {this.state.isUserLogged ? <LogoutButton /> : <LoginButton />}
      </div>
  }
}
