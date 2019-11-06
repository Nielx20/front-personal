import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logo from "../../src/images/logos/logo.png";

export default class App extends Component {
  render() {
    return (
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div class="divcontainer">
        <img src={Logo} />
      </div>
      <div className="container secondary-color">
        <h1 className="display-4 text-center">PERSONAL GUIDE</h1>
        <p className="lead text-center">Bem Vindo</p>
        <hr className="my-4" />
        <Link to="/test/" className="btn btn-lg custom-button" role="button">
          Sobre nós
        </Link>
        <Link to="/singin" className="btn btn-lg custom-button" role="button">
          Login
        </Link>
        <Link to="/singup" className="btn btn-lg custom-button" role="button">
          Cadastro
        </Link>
        <Link to="/alunos" className="btn btn-lg custom-button" role="button">
          Alunos
        </Link>
        <Link to="/logado" className="btn btn-lg custom-button" role="button">
          Planos
        </Link>
        <Link to="/album" className="btn btn-lg custom-button" role="button">
          Exercicíos
        </Link>
      </div>
    </div>
  </div>
    )
  }
}
