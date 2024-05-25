import React from "react";
import salad from "../images/salad.jpg";
import giphy from "../images/giphy.webp";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-warning bg-light">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          <img src={salad} alt="logo" className="logo" />
          Foodie
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Menu
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/category"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/veg">
                    Veg
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/non-veg">
                    non-veg
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reviews">
                Reveiws
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/restaurant">
                Restaurant
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control mx-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <img
              src={giphy}
              alt="giphy"
              style={{ height: "40px", width: "40px" }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
