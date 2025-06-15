import './Skills.css';

const skills = [
  'C', 'C++', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap',
  'jQuery', 'React.js', 'Node.js', 'Express.js', 'Flask', 'WordPress',
  'MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Power BI',
  'MS Excel', 'Matplotlib'
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid flat no-icons">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
