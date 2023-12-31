import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Header.scss";

export default function Header(props) {
  const { cart, user, logOut } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      console.log(user.role);
    }
    
  },[user]);
  const handleLogOut = () => {

      logOut()
      navigate('/');

  };

  if (user === null) {
    return (
      <div className="background-color">
        <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
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
                <i className="bi bi-cart"></i>{" "}
                {cart.reduce((total, product) => {
                  return total + product.quantity;
                }, 0)}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (user.role === 0) {
    return (
      <div className="background-color">
        <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <div className="nav-link custom-text-style" >
                  Welcome {user.name}
                </div>
              </li>
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
                <div className="nav-link custom-text-style" onClick={handleLogOut}>
                  Log Out
                </div>
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
                <i className="bi bi-cart"></i>{" "}
                {cart.reduce((total, product) => {
                  return total + product.quantity;
                }, 0)}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (user.role===1) {
    return (
      <div className="background-color">
        <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <div className="nav-link custom-text-style" >
                  Welcome {user.name}
                </div>
              </li>
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
                <Link className="nav-link custom-text-style" to="/product/new">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-text-style" to="/shop/manage">
                  Manage Shop
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link custom-text-style" onClick={handleLogOut}>
                  Log Out
                </div>
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
                <i className="bi bi-cart"></i>{" "}
                {cart.reduce((total, product) => {
                  return total + product.quantity;
                }, 0)}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
