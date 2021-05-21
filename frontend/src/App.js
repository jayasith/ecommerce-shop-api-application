import { Route, Switch } from "react-router-dom";
import { useContext } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Products from "./components/Products";
import OrderList from "./components/OrderList";
import DeliveryForm from "./components/DeliveryForm";
import AddItems from "./components/AddItems";
import ItemEditDelete from "./components/ItemEditDelete";
import ErrorPage from "./components/ErrorPage";

import Context from "./components/contexts/Context";

function App() {
	const context = useContext(Context);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Navbar />
					<Home />
				</Route>
				<Route path="/buyer-register">
					<Navbar />
					<Form fetchEndpoint="buyers" title="Register" isRegisterForm />
				</Route>
				<Route path="/seller-register">
					<Navbar />
					<Form
						fetchEndpoint="sellers"
						title="Seller Register"
						isRegisterForm
					/>
				</Route>
				<Route path="/login">
					<Navbar />
					<Form fetchEndpoint="buyerlog" title="Login" isRegisterForm={false} />
				</Route>
				<Route
					path="/products"
					render={() => (
						<>
							{context.userAuth && <Navbar />}
							{context.userAuth ? <Products /> : <ErrorPage />}
						</>
					)}
				></Route>
				<Route
					path="/orders"
					render={() => (
						<>
							{context.userAuth && <Navbar />}
							{context.userAuth ? <OrderList /> : <ErrorPage />}
						</>
					)}
				></Route>
				<Route path="/additems">
					<Navbar />
					<AddItems isAddItem />
				</Route>
				<Route path="/payment">
					<Navbar />
					<DeliveryForm isDeliveryForm />
				</Route>
				<Route path="/itemeditdelete">
					<Navbar />
					<ItemEditDelete />
				</Route>
				<Route path="*" component={ErrorPage} />
			</Switch>
		</div>
	);
}

export default App;
