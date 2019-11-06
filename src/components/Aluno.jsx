import React from "react";
import { Link } from "react-router-dom";

class Aluno extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aluno: { nome: "", altura: "", peso:""  } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }
}

export default Aluno;