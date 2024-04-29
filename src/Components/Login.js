import React from "react";
import "../CSS/login.css"
export const Login = () => {
    return (
        <div className="xyz">
       <div className="login-container">
    <h2>LOGIN</h2>
    <form >
      <input type="text" placeholder="Username" required/>
      <input type="password" placeholder="Password" required/>
      <input type="submit" value="Login"/>
    </form>
  </div>
        </div>
    )
}