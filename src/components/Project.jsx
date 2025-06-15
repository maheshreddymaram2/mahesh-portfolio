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
              A fully responsive portfolio site built using React, Vite, and CSS.  
              Includes sections like About, Projects, Skills, and Contact with AOS animation.
            </p>
            <p><strong>Tech:</strong> React, Vite, CSS, AOS</p>
            <div className="project-links">
              <a href="https://venkatamahesh.vercel.app" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/mahesh-portfolio" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Hostel Booking */}
        <div className="project-card" data-aos="fade-down">
          <img src={hostelImg} alt="Hostel Booking System" className="project-image" />
          <div className="project-content">
            <h3>Hostel Booking System</h3>
            <p>
              A full-stack hostel room booking app with login, booking, cancellation, chatbot, and PDF receipts.  
              Mobile-friendly and includes admin dashboard features.
            </p>
            <p><strong>Tech:</strong> Flask, HTML, CSS, JS, MySQL</p>
            <div className="project-links">
              <a href="https://srm-hostel-booking-system-flask.onrender.com" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/SRM-Hostel-Booking-System-Flask" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Smart Parking */}
        <div className="project-card" data-aos="fade-up">
          <img src={parkingImg} alt="Smart Parking" className="project-image" />
          <div className="project-content">
            <h3>Smart Parking System</h3>
            <p>
              A slot-based parking booking UI with color-coded availability, max 5-slot selection, and receipt generation.  
              Fully responsive layout and vehicle filtering included.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JS, localStorage</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/smart-parking-system/" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/smart-parking-system" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Knapsack */}
        <div className="project-card" data-aos="fade-down">
          <img src={knapsackImg} alt="Knapsack Solver" className="project-image" />
          <div className="project-content">
            <h3>Fractional Knapsack Solver</h3>
            <p>
              Greedy-based algorithm visualizer with real-time item input and optimal profit breakdown.  
              Supports authentication and localStorage.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JS, localStorage</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/Fractional-Knapsack-Problem-Solver/" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/Fractional-Knapsack-Problem-Solver" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Job Portal */}
        <div className="project-card" data-aos="fade-up">
          <img src={jobPortalImg} alt="Job Portal" className="project-image" />
          <div className="project-content">
            <h3>Job Portal</h3>
            <p>
              A role-based job board where Users, HRs, and Admins can post, apply, and manage jobs.  
              Simple UI built entirely with vanilla JavaScript.
            </p>
            <p><strong>Tech:</strong> HTML, CSS, JavaScript</p>
            <div className="project-links">
              <a href="https://maheshreddymaram2.github.io/JOB-PORTAL/" target="_blank" rel="noreferrer">Live</a>
              <a href="https://github.com/maheshreddymaram2/JOB-PORTAL" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Smart Waste */}
        <div className="project-card" data-aos="fade-down">
          <img src={wasteImg} alt="Smart Waste Management" className="project-image" />
          <div className="project-content">
            <h3>Smart Waste Management</h3>
            <p>
              IoT-based system using sensors to detect waste levels and open the bin lid automatically.  
              Displays data on an LCD with power-efficient features.
            </p>
            <p><strong>Tech:</strong> Arduino, Sensors, LCD, Servo</p>
            <div className="project-links">
              <a href="https://www.tinkercad.com/things/7SXf85Zj3UG-smart-waste-management-iot" target="_blank" rel="noreferrer">Tinkercad</a>
              <a href="https://github.com/maheshreddymaram2/smart-waste-management-iot" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;

