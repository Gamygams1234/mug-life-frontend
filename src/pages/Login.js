// Import necessary libraries and styles
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  // State to manage the active tab (login or sign up)
  const [activeTab, setActiveTab] = useState('login');

  // Function to switch between login and sign up tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => switchTab('login')}
                href="#"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => switchTab('signup')}
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
          <div className="tab-content mt-2">
            {activeTab === 'login' && (
              <div className="tab-pane fade show active">
                {/* Login form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="loginEmail" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="loginPassword" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            )}
            {activeTab === 'signup' && (
              <div className="tab-pane fade show active">
                {/* Sign up form */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="signupName" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="signupName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="signupEmail" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="signupPassword" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
