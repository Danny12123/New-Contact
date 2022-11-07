import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./holder.css";
import { connect } from "react-redux";
import {ADDNEW_USER} from "../src/Action/UserAction";
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase/configuer";



const FormCom = (props) => {
    const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = async(e) => {
		e.preventDefault();
        let listcontact = {id:uuidv4(), name, contact, location}
        // Add a new document in collection "cities"
        await setDoc(doc(db, "mycoontact", listcontact.id),listcontact); 

		// props.ADDNEW_USER({ name, contact, location, id: uuidv4() });
		setName("");
		setContact("");
		setLocation("");
	};

    
    
  return (
    <div>
        <h4 className="h4">Add a new contact</h4>
      <Form>
            
            <input   className="input"
                    type="Name"
                    value={name}
                     placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                
            		
            <input className="input"
                    type="text"
                    placeholder="Contacct"
                    value={contact}
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}/>

            
            <input className="input"
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
const mapDispatch = {
    ADDNEW_USER
}

export default connect(null, mapDispatch)(FormCom)
