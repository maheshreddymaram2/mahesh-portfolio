import './Codingstats.css';

function CodingStats() {
  return (
    <section className="coding-stats" id="coding">
      <h2 className="section-title">Coding Stats</h2>

      <div className="stats-grid">

        {/* LeetCode Stats */}
        <div className="stat-card" data-aos="fade-up">
          <h3>LeetCode</h3>
          <img
            src="https://leetcard.jacoblin.cool/maheshreddymaram"
            alt="LeetCode Stats"
            className="stats-image"
          />
          <a
            href="https://leetcode.com/maheshreddymaram"
            className="stats-link"
            target="_blank"
            rel="noreferrer"
          >
            View LeetCode Profile
          </a>
        </div>

        {/* GitHub Stats */}
        <div className="stat-card" data-aos="fade-up" data-aos-delay="150">
          <h3>GitHub</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=maheshreddymaram2&show_icons=true&theme=default"
            alt="GitHub Stats"
            className="stats-image"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=maheshreddymaram2&theme=default"
            alt="GitHub Streak"
            className="stats-image"
          />
          <a
            href="https://github.com/maheshreddymaram2"
            className="stats-link"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}

export default CodingStats;
