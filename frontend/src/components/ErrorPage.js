import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>Oops, requested page can not be found.</h1>
			<Link to="/">
				<button className="important" style={{ margin: "4rem" }}>
					Back to Home
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
