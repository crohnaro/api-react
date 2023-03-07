import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomersList from "./pages/customers/List";
import CustomersRegister from "./pages/customers/Register";
import Home from "./pages/Home";

import TemplateDefault from "./templates/Default/Default";
import TemplatePage from "./templates/TemplatePage/Page";

const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Lista de Clientes" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
};

export default App;
