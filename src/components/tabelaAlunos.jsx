import React, { Component } from 'react'
import MaterialTableDemo from './tableComponent'
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"


export default class tabelaAlunos extends Component {
  render() {
    return (
      <div className='container'>
        <MaterialTableDemo/>
        <Link
          to="/"
          className="btn btn-lg custom-button"
          role="button"
        >Voltar</Link>
      </div>
    )
  }
  
}
