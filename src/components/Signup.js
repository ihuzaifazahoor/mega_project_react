import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PasswordText, setPasswordText] = useState("");
  function validateForm() {
    return (
      email.length > 0 &&
      email.includes("@") &&
      password.length > 0 &&
      password === passwordRe
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="row m-5 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-6">
        <div className="form-outline mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            id="form2Example4"
            className="form-control"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            id="form2Example5"
            className="form-control"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label">Email Address:</label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <div className="form-text text-danger">
            {/* {emailText && { emailText }} */}
          </div>
        </div>

        <div className="form-outline mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-outline mb-3">
          <label className="form-label">Enter Password again:</label>
          <input
            type="password"
            id="form2Example3"
            className="form-control"
            value={passwordRe}
            onChange={(e) => {
              setPasswordRe(e.target.value);
              if (password !== e.target.value) {
                setPasswordText("Please didn't match!");
              } else if (password === e.target.value) {
                setPasswordText("Password match!");
              }
            }}
            required
          />
          <div className="form-text text-danger">{PasswordText}</div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-dark mb-3"
          disabled={!validateForm()}
        >
          Register
        </button>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
}
