import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Products from "./components/Products";
import DeliveryForm from "./components/DeliveryForm";
import Cart from "./components/Cart";

const CartContext = React.createContext("");

const handleCartClick = () => {};

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={"close"}>
        <Navbar />
      </CartContext.Provider>
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
          <Route path="/cart">
            <Cart />
          </Route>
        </Route>
        <Route path="/delivery">
          <DeliveryForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
