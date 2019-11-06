import React from "react";
import MaterialTable from "material-table";
import { AddBox, ArrowUpward } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: "auto"
  },

  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },

  link: {
    margin: theme.spacing(1, 1.5)
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  toolbar: {
    margin: "auto"
  }
}));

export default function MaterialTableDemo() {
  
  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "CPF", field: "CPF", type: "numeric" },
      { title: "Idade", field: "Idade", type: "numeric" },
      { title: "Altura", field: "Altura", type: "numeric" },
      { title: "Peso", field: "Peso", type: "numeric" },
      { title: "Massa corporal", field: "Massa_corporal", type: "numeric" },
      { title: "Pago", field: "Pagamento", type: "string" }
    ],
    data: [
      {
        name: "Seninha",
        CPF: "11111111111",
        Idade: 20,
        Altura: 1.50,
        Peso: 55,
        Massa_corporal: 1.5,
        Pagamento: "Sim"
      },
      {
        name: "Igor",
        CPF: "22222222222",
        Idade: 20,
        Altura: 1.50,
        Peso: 55,
        Massa_corporal: 1.5,
        Pagamento: "Não"
      },

      {
        name: "Iza",
        CPF: "33333333333",
        Idade: 18,
        Altura: 1.50,
        Peso: 55,
        Massa_corporal: 1.5,
        Pagamento: "Sim"
      },
    ]
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Tabela de Alunos
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Calendário de Agendamentos
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Listagem de Pacotes
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Biblioteca de Exercícios
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <MaterialTable
        title="Buscar"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </React.Fragment>
  )};