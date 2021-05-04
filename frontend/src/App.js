import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Products from "./components/Products";
import DeliveryForm from "./components/DeliveryForm";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buyer-register">
          <Form fetchEndpoint="buyers" title="Register" isRegisterForm />
        </Route>
        <Route path="/seller-register">
          <Form
            fetchEndpoint="sellers"
            title="Seller Register"
            isRegisterForm
          />
        </Route>
        <Route path="/login">
          <Form fetchEndpoint="login" title="Login" isRegisterForm={false} />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/delivery">
          <DeliveryForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
