import React from "react";

const Navbar = () => {
  return (
    <nav className ="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
      <div className ="container-fluid ">
        <a className ="navbar-brand " href="#">
          Hotel Lux
        </a>
        <button
          className ="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse " id="navbarNav">
          <ul className ="navbar-nav ms-auto">
            <li className ="nav-item">
              <a className ="nav-link "  href="#">
                Register
              </a>
            </li>
            <li className ="nav-item">
              <a className ="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
