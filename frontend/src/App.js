import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Products from "./components/Products";
import OrderList from "./components/OrderList";
import Order from "./components/Order";
import DeliveryForm from "./components/DeliveryForm";
import AddItems from "./components/AddItems";
import Payment from "./components/PaymentMethods";
import ItemEditDelete from "./components/ItemEditDelete";

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
          <Form fetchEndpoint="buyerlog" title="Login" isRegisterForm={false} />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/orders">
          <OrderList />
        </Route>
        <Route path="/delivery">
          <DeliveryForm isDeliveryForm />
        </Route>
        <Route path="/delivery"></Route>
        <Route path="/additems">
          <AddItems isAddItem />
        </Route>
        <Route path="/payment">
          <DeliveryForm isDeliveryForm />
          <Payment />
        </Route>
        <Route path="/itemeditdelete">
          <ItemEditDelete />
          <Payment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
