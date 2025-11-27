export default function ExperienceWindow() {
  return (
    <div className="content-container">
      <h1 className="content-title">Experience</h1>

      <div className="job">
        <h2 className="job-title">ATCO Electric Yukon — Engineering Assistant Intern</h2>
        <p className="job-date">Sep 2024 – Aug 2025 • Whitehorse, YT</p>
        <ul className="job-list">
          <li>Automated generator load ratio calculations (40% faster processing).</li>
          <li>Integrated historical data into CYME to improve network accuracy.</li>
          <li>Completed 500+ technical reviews to eliminate project backlog.</li>
          <li>Built Power Automate workflow to streamline project documentation.</li>
          <li>Handled customer load connection inquiries and technical resolution.</li>
        </ul>
      </div>

      <div className="job">
        <h2 className="job-title">Pint AI — Frontend Developer Intern</h2>
        <p className="job-date">Jun 2024 – Aug 2024 • Remote</p>
        <ul className="job-list">
          <li>Built dashboards and settings pages with React + Next.js.</li>
          <li>Integrated APIs for auth, org management, and profile upload.</li>
          <li>Developed reusable UI components and optimized frontend reliability.</li>
        </ul>
      </div>
    </div>
  );
}