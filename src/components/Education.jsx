import './Education.css';
import { useEffect, useState } from 'react';

function Education() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Initial check
    setIsDarkMode(document.body.classList.contains('dark-mode'));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`education ${isDarkMode ? 'section-dark-2' : ''}`} id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {/* B.Tech */}
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>
              SRM Institute of Science and Technology, Chennai <br />
              <strong>2022 – 2026</strong>
            </p>
            <p>CGPA: <strong>9.51 / 10</strong></p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>Intermediate (MPC)</h3>
            <p>
              Oxford Junior College, Andhra Pradesh <br />
              <strong>2020 – 2022</strong>
            </p>
            <p>Board of Intermediate Education</p>
            <p>Percentage: <strong>89.5%</strong></p>
          </div>
        </div>

        {/* 10th */}
        <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
          <div className="timeline-dot" />
          <div className="timeline-content float-card">
            <h3>SSC (10th Standard)</h3>
            <p>
              Dr. KKR Gowtham High School, Andhra Pradesh <br />
              <strong>2019 – 2020</strong>
            </p>
            <p>Board of Secondary Education</p>
            <p>Percentage: <strong>100%</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

