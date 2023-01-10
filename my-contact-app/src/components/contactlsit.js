import React from "react";
import ContactCard from "./contactcard";


    
const Contactlsit = (props) =>
{


    const renderContactlsit = props.contacts.map((contact) =>
    {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
          {renderContactlsit}
        </div>
    );
    
};

export default Contactlsit;