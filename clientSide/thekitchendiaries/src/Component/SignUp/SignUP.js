import React from "react";


import './SignUp.css';
function Signup(){
    return(
        <div className="body">
            <div class="main">
                <div class="details">
                    <div className="userName"><b>User Name</b></div>
                    <div><input type="text" placeholder=" Enter your User Name"/></div>
                    <div className="text"><b>Email</b></div>
                    <div><input type="email" placeholder="Enter your email"/></div>
                    <div className="text"><b>Password</b></div>
                    <div><input type="password" placeholder="Enter your password"/></div>
                    <button className="button">Signup</button>
                    <p>already if an account?<span>Login</span></p>
                </div>
            </div>
        </div>
    );

}
export default Signup;
