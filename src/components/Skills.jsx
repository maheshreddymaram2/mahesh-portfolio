import './Skills.css';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiWordpress
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaChartBar, FaFileExcel, FaChartLine } from 'react-icons/fa';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      {/* Programming Languages */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Programming Languages</h3>
        <div className="skills-grid">
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiC size={30} color="#00599C" /></div>
            <div>C</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiCplusplus size={30} color="#004482" /></div>
            <div>C++</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiPython size={30} color="#3776AB" /></div>
            <div>Python</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiJavascript size={30} color="#F7DF1E" /></div>
            <div>JavaScript</div>
          </div>
        </div>
      </div>

      {/* Frontend Development */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Frontend Development</h3>
        <div className="skills-grid">
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiHtml5 size={30} color="#E34F26" /></div>
            <div>HTML5</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiCss3 size={30} color="#1572B6" /></div>
            <div>CSS3</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiBootstrap size={30} color="#7952B3" /></div>
            <div>Bootstrap</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiJquery size={30} color="#0769AD" /></div>
            <div>jQuery</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiReact size={30} color="#61DAFB" /></div>
            <div>React.js</div>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Backend Development</h3>
        <div className="skills-grid">
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiNodedotjs size={30} color="#339933" /></div>
            <div>Node.js</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiExpress size={30} color="#000000" /></div>
            <div>Express.js</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiFlask size={30} color="#000000" /></div>
            <div>Flask</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiMysql size={30} color="#4479A1" /></div>
            <div>MySQL</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiMongodb size={30} color="#47A248" /></div>
            <div>MongoDB</div>
          </div>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Tools & Platforms</h3>
        <div className="skills-grid">
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiGit size={30} color="#F05032" /></div>
            <div>Git</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiGithub size={30} color="#181717" /></div>
            <div>GitHub</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><VscCode size={30} color="#007ACC" /></div>
            <div>VS Code</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><SiWordpress size={30} color="#21759B" /></div>
            <div>WordPress</div>
          </div>
        </div>
      </div>

      {/* Data & Visualization */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Data & Visualization</h3>
        <div className="skills-grid">
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><FaChartBar size={30} /></div>
            <div>Power BI</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><FaFileExcel size={30} /></div>
            <div>MS Excel</div>
          </div>
          <div className="skill-box" data-aos="fade-up">
            <div className="skill-icon"><FaChartLine size={30} /></div>
            <div>Matplotlib</div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
