import React from "react";
import user from "./imges/userImage.png"

const ContactCard = (props) =>{

const {id, name, email} = props.contact;

     return (
         <div className="item">
             <img className=" ui avater image" src="userImage" 
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
             <i className="trash alternate outline icon" style={{color:"red", marginTop: "7px"}}></i>
            
            </div>
        );
};

export default ContactCard;