import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark  mb-3">
			<Link className="text-decoration-none" to="/">
				<span className="navbar-brand mx-4 text-secondary h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn bg-secondary mx-4">Add a New Contact</button>
				</Link>
			</div>
		</nav>
	);
};