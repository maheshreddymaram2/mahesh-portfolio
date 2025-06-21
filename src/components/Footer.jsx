import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mahesh Reddy Maram. All rights reserved.
        </p>

        <div className="footer-right">
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
