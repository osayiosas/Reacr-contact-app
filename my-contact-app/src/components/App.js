import React from "react";

import './App.css';

import Header from "./Header";

import Addcontact from "./Addcontact";

import Contactlsit from "./contactlsit";



function App()
{
  
  const contacts = [
    {
      id: "1",
      name: "Osayi",
      email: "idiagheosaigbovoosas@gmail.com"
    },

    {
      id: "2",
      name: "joan",
      email: "joan@gmail.com"
    },


    {
      id: "3",
      name: "inki",
      email: "ink.com"
    },
  ];
  
  return (
    <div className="ui container">
      <Header />
      <Addcontact  />
      <Contactlsit  contacts = {contacts} />

    </div>
  )
}

export default App;
