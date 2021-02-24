import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, nota){
    const novaNota = {titulo, nota};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)}/>
      </section>
    );
  }
}

export default App;
