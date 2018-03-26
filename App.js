import React, { Component } from 'react';
import InputCustomizado from "./components/InputCustomizado";
import BotaoCustomizado from "./components/BotaoCustomizado";
import Formulario from "./components/Formulario";
import "./css/pure-min.css";
import "./css/side-menu.css";

class App extends Component {
  constructor() {
    super();
    this.state = {lista: [], nome: "", email: "", senha: ""};

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);


  }

  setNome(evento) {
    this.setState({nome: evento.target.value});
  }
  
  setEmail(evento) {
    this.setState({email: evento.target.value});
  }
  
  setSenha(evento) {
    this.setState({senha: evento.target.value});
  }

  clearForm() {
    this.setState({
      nome: "",
      senha: "",
      email: ""
    })
  }

  isOk(resposta) {
    if (resposta.ok) {
      return resposta;
    }

    throw new Error(resposta.statusText);
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/autores")
      .then(retorno => this.isOk(retorno))
      .then(dados => dados.json())
      .then(dados => this.setState({lista: dados}));
  }

  onSubmitForm(evento) {
    evento.preventDefault();

    fetch("http://localhost:8080/api/autores", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
      }) 

    }).then(resposta => resposta.json())
      .then(retorno => {
        this.setState({lista: retorno});
        alert("Sucesso! Novo autor foi adicionado.");
        this.clearForm();
      })
      .catch(erro => console.log(erro));

  }

  render() {
    return (
        <div id="layout">
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>

            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">React</a>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item menu-item-divided">
                            <a href="#" className="pure-menu-link">Livros</a>
                        </li>
                        <li className="pure-menu-item menu-item-divided">
                            <a href="#" className="pure-menu-link">Autores</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="main">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                    <h2>Curso de React mantido pela Alura</h2>
                </div>

                <div className="content ">
                    {/* <div className="pure-form pure-form-aligned">
                      <form className="pure-form pure-form-aligned" onSubmit={this.onSubmitForm} method="post">
                         */}
                    <Formulario onSubmit={this.onSubmitForm} method="post">
                        <InputCustomizado required="true" id="nome" label="Nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />
                        <InputCustomizado required="true" id="email" label="E-mail" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
                        <InputCustomizado required="true" id="senha" label="Senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />
                        <BotaoCustomizado id="btn-submit" type="submit" label="Adicionar" />
                    </Formulario>
                      {/* </form>             

                    </div>   */}
                    <div>            
                      <table className="pure-table">
                        <thead>
                          <tr>
                            <th>Nome</th>
                            <th>email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.lista.map(autor => (
                              <tr key={autor.id}>
                                <td>{autor.nome}</td>
                                <td>{autor.email}</td>
                              </tr>
                            ))
                          }

                          {/* <tr>
                            <td>Alberto</td>                
                            <td>alberto.souza@caelum.com.br</td>                
                          </tr> */}
                        </tbody>
                      </table> 
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
