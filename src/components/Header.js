import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Header.scss';


export default function Header(props) {
  const {cart} = props
  return (
    <div className="background-color">
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link custom-text-style" to="/shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-text-style" to="/about">
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-text-style" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-md-0">
        <Link id="headerBrandName" className="fw-800" to="/">
          Mug Life
        </Link>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link custom-text-style" to="/cart">
            <i className="bi bi-cart"></i> {cart.length}
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}
