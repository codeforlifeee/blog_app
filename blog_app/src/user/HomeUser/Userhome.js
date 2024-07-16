// UserHome.js
import React from 'react';
import './userHome.css'; // Import the CSS file for styling

const UserHome = () => {
  return (
    <div className='user-home-container'>
      {/* Header */}
      <header className='header'>
        <h1>Welcome to Blog</h1>
        
      </header>

      {/* Main Content Area */}
      <main className='main-content'>
        {/* Featured Posts Section */}
        <section className='featured-posts'>
          <h2>Featured Posts</h2>
          <div className='post'>
            <h3>Post Title 1</h3>
            <p>Post excerpt goes here...</p>
            <a href='#'>Read more</a>
          </div>
          <div className='post'>
            <h3>Post Title 2</h3>
            <p>Another post excerpt goes here...</p>
            <a href='#'>Read more</a>
          </div>
        </section>

        {/* Categories Section */}
        <section className='categories'>
          <h2>Categories</h2>
          <ul>
            <li><a href='#'>Category 1</a></li>
            <li><a href='#'>Category 2</a></li>
            <li><a href='#'>Category 3</a></li>
            <li><a href='#'>Category 4</a></li>
          </ul>
        </section>

        {/* Recent Articles Section */}
        <section className='recent-articles'>
          <h2>Recent Articles</h2>
          <ul>
            <li><a href='#'>Recent Article 1</a></li>
            <li><a href='#'>Recent Article 2</a></li>
            <li><a href='#'>Recent Article 3</a></li>
            <li><a href='#'>Recent Article 4</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className='footer'>
        <div className='social-links'>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
        </div>
        <p>© 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserHome;
