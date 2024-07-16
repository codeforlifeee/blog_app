// contact.js
import React from 'react';
import './contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' placeholder='Your name...' />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' placeholder='Your email...' />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' placeholder='Your message...'></textarea>

        <button type='submit'>Send</button>
      </form>

      {/* Footer component */}
      <footer className='contact-footer'>
        <p>Powered by LIFE</p>
        <div className='social-links'>
          <a href='#' className='social-link'>Facebook</a>
          <a href='#' className='social-link'>YouTube</a>
          <a href='#' className='social-link'>Twitter</a>
          <a href='#' className='social-link'>Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
