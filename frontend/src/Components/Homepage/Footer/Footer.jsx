
import React from 'react';
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; All Rights Reserved - {currentYear}</p>
    </footer>
  );
};

export default Footer;