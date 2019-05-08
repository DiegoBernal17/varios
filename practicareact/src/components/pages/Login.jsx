import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './login-register.css'

export default class Login extends Component {

  constructor(...props) {
    super(...props)

    this.state = {
      loginMessage: null
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.setMessage = this.setMessage.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    login(this.email.value, this.password.value)
      .catch( error => this.setState( this.setMessage('User or password incorrect.') ))
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  resetPassword() {
    resetPassword(this.email.value)
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a  <b>${this.email.value}</b> para reestablecer tu contraseña.`) )  )
      .catch( err => this.setState( this.setMessage(`El email ${this.email.value} no se encuentra registrado`) ) )
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Login</h1>
        <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
          <input type="email" placeholder="email" ref={ email => this.email = email}/>
          <input type="password" placeholder="password" ref={ password => this.password = password}/>
          <input type="submit" className="pure-button pure-button-primary" value="Login"/>
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>Error: { this.state.loginMessage }</p> 
              <u onClick={this.resetPassword} className="alert-link">¿Olvidaste tu contraseña?</u>
            </div>
          }
        </form>
      </article>
    )
  }
}