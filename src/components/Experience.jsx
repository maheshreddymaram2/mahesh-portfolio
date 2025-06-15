import './Exeperience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">

        {/* LogicPlay Club */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>Technical Team Member</h3>
            <p>LogicPlay Club, SRM University</p>
            <p><strong>Mar 2023 – Apr 2025</strong></p>
            <ul>
              <li>Collaborated on software tools to enhance club operations and streamline student engagement.</li>
              <li>Organized coding contests and hosted interactive tech sessions.</li>
              <li>Built and maintained web apps using React, Node.js, Express.js, MySQL, and MongoDB.</li>
            </ul>
          </div>
        </div>

        {/* Softnova */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="150">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>Software Engineer Trainee</h3>
            <p>Softnova Labs Pvt. Ltd</p>
            <p><strong>Sept 2023 – Dec 2023</strong></p>
            <ul>
              <li>Received hands-on training in React.js, Node.js, Express.js, and MongoDB.</li>
              <li>Practiced frontend/backend development through guided projects and assignments.</li>
              <li>Strengthened core web skills in HTML, CSS, and JavaScript through mentor-led sessions.</li>
            </ul>
          </div>
        </div>

        {/* Basket Hunt */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>IT & Web Developer Intern</h3>
            <p>Basket Hunt Pvt. Ltd (Remote)</p>
            <p><strong>Aug 2023 – Oct 2023</strong></p>
            <ul>
              <li>Researched competitor HR tools and improved hiring flow UX.</li>
              <li>Developed real-time chat modules using WebSockets and Node.js.</li>
              <li>Built scalable backend systems with Express and integrated secure MongoDB storage.</li>
            </ul>
          </div>
        </div>

        {/* Helpy Moto */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="450">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>WordPress Developer Intern</h3>
            <p>Helpy Moto Pvt. Ltd</p>
            <p><strong>Jul 2023 – Aug 2023</strong></p>
            <ul>
              <li>Learned and practiced WordPress development through hands-on tutorials and guided project work.</li>
              <li>Collaborated with teammates to understand a live WordPress site focused on "Hiring an Electrician."</li>
              <li>Improved design and layout of specific sections using WordPress themes and customization tools.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
