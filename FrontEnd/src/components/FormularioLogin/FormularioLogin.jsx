import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import api from "../../paginas/services/api";
import "../../assets/style.css";
import BotaoSubmit from "../BotaoSubmit";

class FormularioLogin extends Component {
  constructor() {
    super();
    this.login = "";
    this.senha = "";
  }
  _handleAlterouLogin(e) {
    this.login = e.target.value;
  }
  _handleAlterouSenha(e) {
    this.senha = e.target.value;
  }
  _handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      api
        .post(`autenticar`, {
          email: this.login,
          senha: this.senha,
        })
        .then(() => {
          alert("Logado com sucesso!");
          sessionStorage.setItem('user', this.login);
          window.location.replace("http://localhost:3000/livro");
        })
        .catch(() => {
          alert("Login ou senha inválidos!");
        });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form
          className="form_cadastro"
          onSubmit={this._handleSubmit.bind(this)}
        >
          <TextField
            label="Login"
            type="email"
            variant="filled"
            onChange={this._handleAlterouLogin.bind(this)}
            className="textLogin"
            required
          />
          <br />
          <TextField
            type="password"
            label="Senha"
            variant="filled"
            onChange={this._handleAlterouSenha.bind(this)}
            required
          />
          <BotaoSubmit valor="logar" />
        </form>
      </div>
    );
  }
}

export default FormularioLogin;
