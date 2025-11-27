export default function ProjectsWindow() {
  return (
    <div className="content-container">
      <h1 className="content-title">Projects</h1>

      <div className="project">
        <h3 className="project-title">Python Snake Game</h3>
        <p className="project-tech">Python, Tkinter, Multithreading</p>
        <ul>
          <li>Designed and implemented an OOP-based Snake game with a Tkinter GUI.</li>
          <li>Ensured smooth gameplay using multithreading for concurrent event handling.</li>
          <li>Developed a responsive GUI using event-driven programming.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">
          <a href="https://aakaashsenthilkumar.github.io/weatherapp/" target="_blank" rel="noopener noreferrer">
            Weather App
          </a>
        </h3>
        <p className="project-tech">React, REST APIs, JS, HTML/CSS</p>
        <ul>
          <li>Built a React-based weather app with real-time API integration.</li>
          <li>Implemented dynamic backgrounds and cross-platform compatibility for enhanced UX.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">
          <a href="https://drive.google.com/file/d/1x4V8b0Cj5QfxdPpJjby9BGA6J_BkWZ4_/preview" target="_blank" rel="noopener noreferrer">
            Chat App
          </a>
        </h3>
        <p className="project-tech">React, Socket.io, Node.js</p>
        <ul>
          <li>Developed a real-time chat application with group messaging and chat room creation.</li>
          <li>Integrated Socket.io for persistent bi-directional communication and live user presence updates.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">Social Media App</h3>
        <p className="project-tech">React</p>
        <ul>
          <li>Created a prototype front end with user feed, friends list, and search functionality.</li>
          <li>Applied reusable React components for scalable feature expansion.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">
          <a href="https://aakaashsenthilkumar.github.io/AakaashPortfolio/" target="_blank" rel="noopener noreferrer">
            Personal Website
          </a>
        </h3>
        <p className="project-tech">HTML, CSS, JS, Bootstrap</p>
        <ul>
          <li>Designed and deployed a responsive portfolio website showcasing projects and experience.</li>
          <li>Used Bootstrap components and interactive features for a modern aesthetic.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">Tic Tac Toe vs AI</h3>
        <p className="project-tech">Java, Swing</p>
        <ul>
          <li>Built a GUI-based Tic Tac Toe game with an AI opponent using advanced OOP principles.</li>
          <li>Handled state transitions and win/draw logic efficiently.</li>
        </ul>
      </div>

      <div className="project">
        <h3 className="project-title">Text-Based RPG</h3>
        <p className="project-tech">Java</p>
        <ul>
          <li>Developed a Java-based RPG game, focusing on methods, file streaming, and error handling.</li>
        </ul>
      </div>
    </div>
  );
}
