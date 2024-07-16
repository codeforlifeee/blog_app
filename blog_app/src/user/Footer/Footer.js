// Footer.js
import React from 'react';
import './footer.css'; // Adjust the path as per your project structure

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>powered by LIFE</p>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Additional content for footer */}
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <a className='social-link'> Facebook</a>
        <a className='social-link'> You Tube</a>
        <a className='social-link'> Twitter</a>
        <a className='social-link'> Instagram</a>
      </div>
    </div>
  );
}

export default Footer;
