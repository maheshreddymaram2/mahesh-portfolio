import './Contact.css';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,
  FaLinkedin, FaGithub, FaTwitter, FaInstagram,
  FaUser, FaRegEnvelope, FaRegEdit, FaCommentDots, FaPaperPlane
} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
).then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>

      {/* Contact Info Grid */}
      <div className="contact-info-grid" data-aos="fade-up">
        <div className="contact-grid-box">
          <FaMapMarkerAlt className="grid-icon" />
          <p>SRM Institute Of Science And Technology,Ramapuram</p>
          <a href="https://maps.app.goo.gl/PC69BF6YKXfuLjjM8" target="_blank" rel="noreferrer" className="grid-link">View Map</a>
        </div>

        <div className="contact-grid-box">
          <FaEnvelope className="grid-icon" />
          <p>maheshreddy.maram23@gmail.com</p>
          <a href="mailto:maheshreddy.maram23@gmail.com" className="grid-link">Send Email</a>
        </div>

        <div className="contact-grid-box">
          <FaPhoneAlt className="grid-icon" />
          <p>+91-9515527537</p>
          <a href="tel:+919515527537" className="grid-link">Call Now</a>
        </div>

        <div className="contact-grid-box social-links">
          <FaLinkedin className="grid-icon" />
          <p>Connect with me</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/venkata-mahesh-reddy-maram-28039626b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/maheshreddymaram2" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://x.com/MaheshR92121014" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/i_mmahesh1/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div className="message-form-box" data-aos="fade-up" data-aos-delay="100">
        <h3 className="form-heading">Let’s Connect and Collaborate!</h3>
        <p className="form-subtext">Have an idea or opportunity? Fill out the form and I’ll get back to you soon.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <FaRegEnvelope className="form-icon" />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <FaRegEdit className="form-icon" />
            <input type="text" name="title" placeholder="Subject" required />
          </div>

          <div className="form-group">
            <FaCommentDots className="form-icon" />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          </div>

          {/* Hidden input to send current time */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button type="submit" className="send-btn"><FaPaperPlane /> Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
