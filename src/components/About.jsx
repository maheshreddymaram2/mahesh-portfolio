import profilePic from '../assets/profile.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from 'react-icons/fa';
import './About.css';

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Mahesh Reddy</span>
          </h1>
          <TypeAnimation
            sequence={[
              'Full Stack Web Developer',
              2000,
              'MERN Stack Enthusiast',
              2000,
              'Flask & Python Developer',
              2000,
              'IoT Innovator',
              2000,
              'Data Structures Enthusiast',
              2000,
              'Tech Explorer at SRM University',
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="typing"
          />

          {/* ✅ Added Bio */}
          <p className="bio">
            I'm a B.Tech CSE (IoT) student at SRM University, passionate about building scalable full-stack
            applications and integrating them with real-world IoT systems. I'm always exploring ways to
            innovate through clean code and automation.
          </p>

          <div className="hero-buttons">
            <a href="/resume_3 (1).pdf" className="btn" download>
              Download Resume
            </a>
            <a
              href="https://github.com/yourusername"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        <img src={profilePic} alt="Mahesh Reddy" className="profile-image" />
      </div>
    </section>
  );
}

export default Hero;
