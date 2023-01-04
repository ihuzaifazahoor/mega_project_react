import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailText, setEmailText] = useState(null);
  const [passwordText, setPasswordText] = useState(null);
  function validateForm() {
    return email.length > 0 && email.includes("@") && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="row m-5 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-6">
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example1">
            Email Address:
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text text-danger">
            {emailText && { emailText }}
          </div>
        </div>

        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example2">
            Password:
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-text text-danger">
            {passwordText && { passwordText }}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-dark mb-3"
          disabled={!validateForm()}
        >
          Sign in
        </button>
        <p>
          Not a member? <Link to="/signup">Register</Link>
        </p>
      </div>
    </form>
  );
}