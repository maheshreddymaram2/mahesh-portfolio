import './Project.css';
import portfolioImg from '../assets/portfolio.jpg';
import hostelImg from '../assets/hostel.jpg';
import parkingImg from '../assets/parking.jpg';
import knapsackImg from '../assets/knapsack.jpg';
import jobPortalImg from '../assets/jobportal.jpg';
import wasteImg from '../assets/waste.jpg';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {/* Portfolio */}
        <div className="project-card" data-aos="fade-up">
          <img src={portfolioImg} alt="Portfolio" className="project-image" />
          <div className="project-content">
            <h3>Personal Portfolio</h3>
            <p>
              A responsive portfolio built using React, Vite, and CSS to showcase my skills, experience, and projects.
            </p>
            <p><strong>Tech:</strong> React, Vite, CSS, AOS</p>
            <div className="project-links">
              <a href="#">Live</a>
              <a href="https://github.com/maheshreddymaram2/mahesh-portfolio">GitHub</a>
            </div>
          </div>
        </div>

        {/* Hostel Booking */}
        <div className="project-card" data-aos="fade-down">
          <img src={hostelImg} alt="Hostel Booking System" className="project-image" />
          <div className="project-content">
            <h3>Hostel Booking System (Flask)</h3>
            <p>
              A full-stack hostel management system with login, booking, cancellation, PDF receipts, chatbot, and mobile responsiveness.
            </p>
            <p><strong>Tech:</strong> Flask, HTML, CSS, JavaScript, MySQL</p>
            <div className="project-links">
              <a href="https://srm-hostel-booking-system-flask.onrender.com" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/SRM-Hostel-Booking-System-Flask">GitHub</a>
            </div>
          </div>
        </div>

        {/* Smart Parking */}
        <div className="project-card" data-aos="fade-up">
          <img src={parkingImg} alt="Smart Parking" className="project-image" />
          <div className="project-content">
            <h3>Smart Parking System</h3>
            <p>
              A slot-based booking UI with 5-slot selection limit, vehicle filters, receipts, and price calculation. Responsive grid-based design.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript, localStorage</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/smart-parking-system/" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/smart-parking-system">GitHub</a>
            </div>
          </div>
        </div>

        {/* Knapsack */}
        <div className="project-card" data-aos="fade-down">
          <img src={knapsackImg} alt="Knapsack Solver" className="project-image" />
          <div className="project-content">
            <h3>Fractional Knapsack Solver</h3>
            <p>
              A responsive Greedy algorithm solver with item input, authentication, and breakdown of optimal results using vanilla JS.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript, localStorage</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/Fractional-Knapsack-Problem-Solver/" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/maheshreddymaram2/Fractional-Knapsack-Problem-Solver">GitHub</a>
            </div>
          </div>
        </div>

        {/* Job Portal */}
        <div className="project-card" data-aos="fade-up">
          <img src={jobPortalImg} alt="Job Portal" className="project-image" />
          <div className="project-content">
            <h3>Job Portal</h3>
            <p>
              A multi-role job platform with dashboards for Users, HRs, and Admins. Built fully with vanilla JS and supports login, post, and track flow.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/JOB-PORTAL/">Live</a>
              <a href="https://github.com/maheshreddymaram2/JOB-PORTAL">GitHub</a>
            </div>
          </div>
        </div>

        {/* Smart Waste Management */}
        <div className="project-card" data-aos="fade-down">
          <img src={wasteImg} alt="Smart Waste Management" className="project-image" />
          <div className="project-content">
            <h3>Smart Waste Management (IoT)</h3>
            <p>
              An IoT-based smart bin using ultrasonic and PIR sensors, with automated lid control and LCD-based monitoring.
            </p>
            <p><strong>Tech:</strong> Arduino Uno, Sensors, Servo, LCD</p>
            <div className="project-links">
              <a href="https://www.tinkercad.com/things/7SXf85Zj3UG-smart-waste-management-iot" target="_blank" rel="noreferrer">Thinkercad</a>
              <a href="https://github.com/maheshreddymaram2/smart-waste-management-iot">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
