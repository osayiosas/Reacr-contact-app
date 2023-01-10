import React from "react";

class Addcontact extends React.Component
{
    render(){
        return (
            <div className="ui main">

                <h2>Add Contact</h2>

                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your name"></input>
                        
                        <label>Email</label>
                        <input type="email"  name="email" placeholder="Your email"></input>
                    </div>

                    <button className="ui button blue">Add</button>
                </form>


            </div>
        );
    }
}

export default Addcontact;