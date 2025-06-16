import './Footer.css';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEye } from 'react-icons/fa';

function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Call CountAPI to increment and get the updated value
    fetch('https://api.countapi.xyz/hit/maheshreddy-portfolio/visits')
      .then(res => res.json())
      .then(data => setVisits(data.value))
      .catch(err => console.error("Visitor count error:", err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mahesh Reddy Maram. All rights reserved.
        </p>

        <div className="footer-right">
          <div className="visitor-counter">
            <FaEye className="visitor-icon" />
            <span>Visitors: {visits}</span>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/venkata-mahesh-reddy-maram-28039626b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/maheshreddymaram2" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://x.com/MaheshR92121014" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/i_mmahesh1/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
