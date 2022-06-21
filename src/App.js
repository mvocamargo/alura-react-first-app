import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {
  state = {
    autores: [
      {
        "nome": "Everett Kennedy",
        "livro": "et",
        "preco": "$2,008.40"
      },
      {
        "nome": "Miles Mcfadden",
        "livro": "commodo",
        "preco": "$3,596.39"
      },
      {
        "nome": "Nina Beard",
        "livro": "dolore",
        "preco": "$3,851.73"
      },
      {
        "nome": "Deana Vang",
        "livro": "occaecat",
        "preco": "$2,751.19"
      },
      {
        "nome": "Kramer Guy",
        "livro": "est",
        "preco": "$2,978.57"
      }
    ]
  }

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        })
      }
    )
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} ></Tabela>
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
