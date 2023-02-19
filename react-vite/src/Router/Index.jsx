import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

function RouterApp() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={<Home />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;