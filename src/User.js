import React from "react";
import { Card, Col } from "react-bootstrap";

function User(props) {
	return (
		<Col  style={{ width: "12rem", marginBottom: "10px" }}>
			<Card className="card">
				<Card.Body>
					<Card.Title><h5 className="h5">Name:{props.userContact.name}</h5></Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<h6>Contacct:{props.userContact.contact}</h6>
					</Card.Subtitle>
					<Card.Text><h6>Location:{props.userContact.location}</h6></Card.Text>
					<button href="#" className="btnn-1" variant="primary">
						Edit
					</button>
					<button href="#" className="btnn-2" variant="danger">
						Delete
					</button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default User;