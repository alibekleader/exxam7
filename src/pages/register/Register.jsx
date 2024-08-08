import React from "react";
import "./Register.scss";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="signUp container">
      <div className="input-part ">
        <p className="toEatly">Sign Up To eatly</p>
        <form>
          <input type="text" required />
          <input type="email" required />
          <input type="password" required />
        </form>
        <button>
          {" "}
          <NavLink to="/login">SIGN UP</NavLink>
        </button>
        <p>
          Already Have An Account ? <NavLink to="/login">Log in</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
