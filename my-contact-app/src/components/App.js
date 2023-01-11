import React, { useState, useEffect } from "react";
import { uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlsit from "./contactlsit";



function App()
{
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>
  {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contacts }]);
  };



  useEffect(() =>
  { 
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  
  useEffect(() =>
  { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlsit contacts={contacts} />

    </div>
  );
}

export default App;
