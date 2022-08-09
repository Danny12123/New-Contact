import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./edit.css";


const EditUser = (props) => {
    const [name, setName] = useState(props.userContact.name);
	const [contact, setContact] = useState(props.userContact.contact);
	const [location, setLocation] = useState(props.userContact.location);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.newContact( props.userContact.id, { name, contact, location });
		setName("");
		setContact("");
		setLocation("");
	};
  return (
    <div>
      
      <Form>
            
            <input  className="edit_input"  
                    type="Name"
                    value={name}
                     placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                
            		
            <input  className="edit_input"
                    type="text"
                    placeholder="Contacct"
                    value={contact}
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}/>

            
            <input  className="edit_input"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }} />
                

            <button onClick={handleSubmit} className="btnn" type="submit">
                Add Contact
            </button>
        </Form>
    </div>
  )
}

export default EditUser;
