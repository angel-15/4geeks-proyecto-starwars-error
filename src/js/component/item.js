import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Item = props => {
	const charProperties = props.properties.map((property, index) => {
		return (
			<div key={index}>
				<Card style={{ width: "18rem" }} className="">
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>{property.name}</Card.Title>
						<Button variant="outline-primary" onClick={handleclick}>
							Learn More!
						</Button>
						<Button variant="outline-warning">Fav!</Button>
					</Card.Body>
				</Card>
			</div>
		);
	});

	return (
		<div className="container-fluid mb-3">
			<h1 className="text-danger">{props.typeName}</h1>
			<div className="overflow-auto row row flex-nowrap">{charProperties}</div>
		</div>
	);
};

Item.propTypes = {
	properties: PropTypes.array,
	typeName: PropTypes.string.isRequired
};
