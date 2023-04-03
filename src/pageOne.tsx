import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

function PageOne () {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    function handleClick () {
        if(username && password){
            navigate('/dashborad');
        }
    }
    return(
        <div className="App">
           <div className="row">
            <div className="col-md-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="Bgimage" alt="no image"/>
                <div className="vertical"></div>
            </div>
            <div className="col-md-6">
            <div className="container">
            <h2>Sign In</h2>
                <input type="text" className="inputOne" placeholder="email address" onChange={(e) => setUsername(e.target.value)}/> <br/> &nbsp;
                <input type="password" className="inputTwo" placeholder="password" onChange={(e) => setPassword(e.target.value)}/> <br/>
                <button className="btnClass" onClick={handleClick}>Login</button>
                <h3><span>OR</span></h3>
                <button className="btnClass">Register</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default PageOne;