import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Navbar = () => {
  const isLoggedIn = localStorage.getItem("authToken");
  console.log(isLoggedIn);
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    navigate("/search/" + e.target[0].value)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ML Sense
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              )}
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Signin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                name="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
