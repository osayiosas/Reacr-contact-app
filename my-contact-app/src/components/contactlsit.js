import React from "react";
import ContactCard from "./contactcard";


    
const Contactlsit = (props) =>
{
    console.log(props);

    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    };

    const renderContactlsit = props.contacts.map((contact) =>
    {
        return (
            <ContactCard contact={contact} clickHandler={ deleteContactHandler} key = {contact.id}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
          {renderContactlsit}
        </div>
    );
    
};

export default Contactlsit;