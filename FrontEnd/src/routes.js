import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Livros from "./paginas/Livro/index";
import CadastroLivro from "./components/FormularioCadastroLivro";
import CadastroUsuario from "./components/FormularioCadastroUsuario";
import FormularioLogin from "./components/FormularioLogin";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={FormularioLogin} />
        <Route path="/livro" component={Livros} />
        <Route path="/cadastroLivro" component={CadastroLivro} />
        <Route path="/cadastroUsuario" component={CadastroUsuario} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
