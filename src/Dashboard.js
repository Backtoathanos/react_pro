import React from 'react';
import './Dashboard.css'; // For custom styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
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
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>1500</p>
          </div>
          <div className="stat-card">
            <h3>Sales Today</h3>
            <p>$2,000</p>
          </div>
          <div className="stat-card">
            <h3>Pending Orders</h3>
            <p>45</p>
          </div>
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>Dashboard &copy; 2024</p>
      </footer>
    </div>
  );
}

export default Dashboard;
