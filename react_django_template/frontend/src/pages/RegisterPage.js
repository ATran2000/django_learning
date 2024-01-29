import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <br/>
        <input type="email" name="email" placeholder="Enter Email" />
        <br/>
        <input type="password" name="password" placeholder="Enter Password" />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;