


// AdminDashboard.js
import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className='admin-dashboard'>
      {/* Sidebar */}
      <aside className='sidebar'>
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href='#'>Posts</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Users</a></li>
          <li><a href='#'>Settings</a></li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className='main-content'>
        {/* Header */}
        <header className='header'>
          <h1>Welcome, Admin!</h1>
          <p>Logged in as admin@example.com</p>
        </header>

        {/* Example Section: Posts */}
        <section className='section'>
          <h2>Manage Posts</h2>
          <div className='content'>
            {/* Display posts management components */}
            <p>Placeholder for posts management UI.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
