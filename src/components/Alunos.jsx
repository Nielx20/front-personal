import React from "react";
import { Link } from "react-router-dom";

class Alunos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        alunos: []
      };
    }

    componentDidMount() {
        const url = "alunos/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ alunos: response }))
          .catch(() => this.props.history.push("/"));
    }

    render() {
        const { alunos } = this.state;
        const allAlunos = alunos.map((aluno, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{aluno.nome}</h5>
                <Link to={`/alunos/show/${aluno.id}`} className="btn custom-button">
                  View Aluno
                </Link>
              </div>
            </div>
          </div>
        ));
        const noAluno = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              Sem alunos. Que tal <Link to="/new_recipe">Criar um</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">Alunos</h1>
                <p className="lead text-muted">
                  Listagem de todos os alunos
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/alunos" className="btn custom-button">
                    Cadastrar novo aluno
                  </Link>
                </div>
                <div className="row">
                  {alunos.length > 0 ? allAlunos : noAluno}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  
  }
  export default Alunos;