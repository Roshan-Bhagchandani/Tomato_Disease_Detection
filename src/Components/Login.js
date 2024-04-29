import React from "react";
import "../CSS/login.css"
export const Login = () => {
    return (
        <div className="xyz">
       <div className="login-container">
    <h2>LOGIN</h2>
    <form >
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <a href="/"><input type="submit" value="Login"/></a>
      {/* <a href="/"><p>SUBMIT</p></a> */}
    </form>
  </div>
        </div>
    )
}