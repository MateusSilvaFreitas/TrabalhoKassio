import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import "./style.css";

class MenuBar extends Component {
  constructor(){
    super();
    let login = sessionStorage.getItem("user");
    if(!login){
      alert("Usuário não logado!")
      window.location.replace("http://localhost:3000/");
    }
  }

  _handleLogout() {
    sessionStorage.removeItem("user");
    alert("Logout feito com sucesso!")
    window.location.replace("http://localhost:3000/");
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/cadastroLivro" className="link_menuBar">
              <Button color="inherit">Cadastro Livros</Button>
            </Link>
            <Link to="/cadastroUsuario" className="link_menuBar">
              <Button color="inherit">Cadastro Usuario</Button>
            </Link>
            <Link to="/livro" className="link_menuBar">
              <Button color="inherit">Listagem Livros</Button>
            </Link>
            <IconButton aria-label="search" color="inherit" onClick={this._handleLogout.bind(this)}>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default MenuBar;
