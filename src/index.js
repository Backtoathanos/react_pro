import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
