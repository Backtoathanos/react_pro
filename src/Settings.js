import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // For custom styling

function Setting() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Settings</h1>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-stats">
          I am Settings page.
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>Dashboard &copy; 2024</p>
      </footer>
    </div>
  );
}

export default Setting;
