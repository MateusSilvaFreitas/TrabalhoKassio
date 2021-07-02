import React, { Component } from "react";
import api from "../../paginas/services/api";
import TextField from "@material-ui/core/TextField";
import "../../assets/style.css";
import BotaoSubmit from "../BotaoSubmit";
import MenuBar from "../MenuBar";

class FormularioCadastroUsuario extends Component {
  constructor() {
    super();
    this.nome = "";
    this.email = "";
    this.senha = "";
    this.telefone = "";
  }
  _handleAlterouNome(e) {
    e.stopPropagation();
    this.nome = e.target.value;
  }
  _handleAlterouEmail(e) {
    e.stopPropagation();
    this.email = e.target.value;
  }
  _handleAlterouSenha(e) {
    e.stopPropagation();
    this.senha = e.target.value;
  }
  _handleAlterouTelefone(e) {
    e.stopPropagation();
    this.telefone = e.target.value;
  }
  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      api.post(`user`, {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        telefone: this.telefone,
      }).then(() =>{
        alert("Registro inserido com sucesso!");
      });
      
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Cadastro de usuários</h1>
        <form
          className="form_cadastro"
          onSubmit={this._handleSubmit.bind(this)}
        >
          <TextField
            label="Nome do usuário"
            onChange={this._handleAlterouNome.bind(this)}
            required
          />
          <TextField
            type="email"
            label="Email"
            onChange={this._handleAlterouEmail.bind(this)}
            required
          />
          <TextField
            type="password"
            label="Senha"
            onChange={this._handleAlterouSenha.bind(this)}
            required
          />
          <TextField
            label="Telefone"
            onChange={this._handleAlterouTelefone.bind(this)}
            required
          />
          <BotaoSubmit valor="cadastrar" />
        </form>
      </div>
    );
  }
}

export default FormularioCadastroUsuario;
