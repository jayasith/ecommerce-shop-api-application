import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/DeliveryForm.css";
import "./styles/Order.css";
import "./styles/Form.css";
import EditItems from "./EditItems";
import Context from "./contexts/Context";

const ItemEditDelete = () => {
	document.title = "Dashboard";

	const context = useContext(Context);
	const userAuth = context.userAuth;
	const [items, setItems] = useState([]);

	const [show, setShow] = useState(false);
	const [id, setId] = useState(null);
	const handleClose = () => setShow(false);

	const handleShow = (id) => {
		setShow(true);
		setId(id);
	};

	const [itemdelete, setItemdelete] = useState(false);

	const handleDelete = (id) => {
		console.log(id);
		fetch(`http://localhost:9090/rest/products/${id}`, {
			method: "DELETE",
		})
			.then((response) => console.log(response))
			.then((data) => console.log(data));
		setItemdelete(true);
	};

	useEffect(() => {
		fetch(`http://localhost:9090/rest/products/${userAuth}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setItems(data);
			});
	}, [show, itemdelete]);

	return (
		<div className="orderList" style={{ textAlign: "center" }}>
			<Link to="/additems">
				<button className="important">Add item </button>
			</Link>
			<br></br>
			<table className="table">
				<tr className="head">
					<th>
						<td>Product name</td>
					</th>
					<th>
						<td>category</td>
					</th>
					<th>
						<td>Description</td>
					</th>
					<th>
						<td>Item Price</td>
					</th>
					<th>
						<td>Image</td>
					</th>
					<th>
						<td>Action</td>
					</th>
				</tr>

				{items.map((item) => (
					<tr className="rw" key={item.sellerId}>
						<td>{item.name}</td>
						<td>{item.category}</td>
						<td>{item.description}</td>
						<td>{item.itemprice}</td>
						<td>
							<img
								src={item.imgurl}
								style={{ height: "100px", width: "100px" }}
							/>
						</td>

						<td style={{ display: "flex" }}>
							<button
								className="bttn"
								onClick={() => {
									handleShow(item.id);
								}}
							>
								Edit
							</button>
							<button onClick={() => handleDelete(item.id)}>Delete</button>
						</td>
					</tr>
				))}
			</table>

			<ToastContainer position="top-center" />
			<Modal className="modal" show={show} onHide={handleClose}>
				{items && <EditItems items={items} id={id} closeModel={setShow} />}
			</Modal>
		</div>
	);
};

export default ItemEditDelete;
