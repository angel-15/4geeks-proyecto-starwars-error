import React from "react";
import starWars from "../../img/star-wars-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 mr-5 ml-5">
			<Link to="/">
				<p>
					<img src={starWars} />
				</p>
			</Link>
			<div className="ml-auto">
				<div className="btn-group" role="group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-secondary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown
					</button>
					<div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a className="dropdown-item" href="#">
							Dropdown link
						</a>
						<a className="dropdown-item" href="#">
							Dropdown link
						</a>
					</div>
				</div>

				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
