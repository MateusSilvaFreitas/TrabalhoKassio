import React, { Component } from "react";
import api from "../../paginas/services/api";
import TextField from "@material-ui/core/TextField";
import "../../assets/style.css";
import BotaoSubmit from "../BotaoSubmit";
import MenuBar from "../MenuBar";

class FormularioCadastroLivro extends Component {
  constructor() {
    super();
    this.nomeAutor = "";
    this.codigoEditora = "";
    this.isbn = "";
    this.qntdEstoque = 0;
    this.assunto = "";
  }
  _handleMudouNomeAutor(evento) {
    evento.stopPropagation();
    this.nomeAutor = evento.target.value;
  }
  _handleMudouCodigoEditora(evento) {
    evento.stopPropagation();
    this.codigoEditora = evento.target.value;
  }
  _handleMudouIsbn(evento) {
    evento.stopPropagation();
    this.isbn = evento.target.value;
  }
  _handleMudouQntdEstoque(evento) {
    evento.stopPropagation();
    this.qntdEstoque = evento.target.value;
  }
  _handleMudouAssunto(evento) {
    evento.stopPropagation();
    this.assunto = evento.target.value;
  }
  _handleSubmitForm(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    try {
      api.post(`book`, {
        nomeAutor: this.nomeAutor,
        codigoEditora: this.codigoEditora,
        isbn: this.isbn,
        qntdEstoque: this.qntdEstoque,
        assunto: this.assunto,
      });
      alert("Registro inserido com sucesso!");
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div>
        <MenuBar />
        <h1>Cadastro de Livros</h1>

        <form
          className="form_cadastro"
          onSubmit={this._handleSubmitForm.bind(this)}
        >
          <TextField
            label="Nome do autor"
            onChange={this._handleMudouNomeAutor.bind(this)}
            required
          />
          <TextField
            label="Código da editora"
            onChange={this._handleMudouCodigoEditora.bind(this)}
            required
          />
          <TextField
            label="ISBN"
            onChange={this._handleMudouIsbn.bind(this)}
            required
          />
          <TextField
            label="Quantidade estoque"
            onChange={this._handleMudouQntdEstoque.bind(this)}
            required
          />
          <TextField
            label="Assunto"
            onChange={this._handleMudouAssunto.bind(this)}
            required
          />
          <BotaoSubmit valor="Cadastrar" />
        </form>
      </div>
    );
  }
}
export default FormularioCadastroLivro;
