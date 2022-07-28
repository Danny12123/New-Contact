import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from 'react-bootstrap';
import FormCom from './FormCom';
import Contact from './Contact';
import "./holder.css";

const Holder = () => {
    const [usersContact, setUsersContact] = useState([
		{ name: " Naa", contact: " 024443536", location: " Ghana" },
		{ name: " Wini", contact: " +1 244535645", location: " USA" },
	]);
   const addContact = (user) => {
		setUsersContact([...usersContact, user]);
	};
  return (
    <div className='holder'>
        <Container>
            <FormCom newContact={addContact} />
            <Contact contactData={usersContact} />
        </Container>
      
    </div>
  )
}

export default Holder
