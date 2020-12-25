import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ExcerTracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Add New Exercise
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Add New User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
