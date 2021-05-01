import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buyer-register">
          <Form fetchEndpoint="buyerreg" title="Register" isRegisterForm />
        </Route>
        <Route path="/seller-register">
          <Form
            fetchEndpoint="sellerreg"
            title="Seller Register"
            isRegisterForm
          />
        </Route>
        <Route path="/login">
          <Form fetchEndpoint="login" title="Login" isRegisterForm={false} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
