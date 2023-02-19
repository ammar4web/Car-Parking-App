import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import RegisterForm from '../Pages/Auth/Register';
import { Link } from 'react-router-dom';

function RouterApp() {
  return (
    <>
      <Router>
        <header className="py-6 bg-gray-100 shadow">
          <div className="container md:px-2 px-4 mx-auto">
            <nav className="flex gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <h2 className="text-xl font-bold">
                  <div className="inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded">
                    P
                  </div>
                  myParking
                </h2>
                <Link className="router-link" to="/">Home</Link>
              </div>
              <div className="flex gap-4 items-center">
                <Link className="router-link" to="/register">Register</Link>
              </div>
            </nav>
          </div>
        </header>

        <div className="container md:px-2 px-4 pt-8 md:pt-16 mx-auto">
          <Routes>
            {/* <Route exact path="/" component={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default RouterApp;