import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomersList from "./pages/customers/List";
import CustomersRegister from "./pages/customers/Register";
import Home from "./pages/Home";
import CustomersEdit from "./pages/customers/Edit";
import Login from "./pages/login/Login";

import TemplateDefault from "./templates/Default/Default";
import TemplatePage from "./templates/TemplatePage/Page";
import TemplateClean from "./templates/Clean/Clean";



const App = () => {

  return (
      <Router>
        <Switch>
          <Route path="/login">
            <TemplateClean title="Acesso Restrito" Component={Login} />
          </Route>
          <TemplateDefault>
            <Route path="/customers/edit/:id">
              <TemplatePage title="Editar Clientes" Component={CustomersEdit} />
            </Route>
            <Route path="/customers/add">
              <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
            </Route>
            <Route path="/customers">
              <TemplatePage title="Lista de Clientes" Component={CustomersList} />
            </Route>
            <Route path="/">
              <TemplatePage title="Home" Component={Home} />
            </Route>
          </TemplateDefault>
        </Switch>
      </Router> 
  );
};

export default App;
