import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, searchForm }) => {

  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    position: "sticky",
    top: "0",
    zIndex: "1000", // Ensure it stays above other content
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: adds a shadow for better visibility
  };

  return (


    <header style={headerStyle}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            {searchForm && (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
