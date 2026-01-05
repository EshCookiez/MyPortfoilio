import './Projects.css';

const Projects = () => {
  const projects = [
  {
    title: 'WanderWays Travel Management',
    description: 'A global travel agency management system designed to streamline operations for trips around the world with flight booking, hotel reservations, and payment processing.',
    tech: ['React', 'Node. js', 'Bootstrap', 'Material-UI', 'Java'],
    icon: 'fas fa-plane',
    codeLink: 'https://github.com/EshCookiez/WanderWays_AppDev',
    demoLink:  '#'
  },
  {
    title: 'Blockchain Notes App',
    description:  'A collaborative blockchain-powered notes application with real-time updates, favorites management, and decentralized storage using Cardano SDK.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Cardano SDK'],
    icon: 'fas fa-sticky-note',
    codeLink: 'https://github.com/Enriquez-EthanM/Notes-App--Munchkin',
    demoLink: '#'
  },
  {
    title: 'SKyber Platform',
    description: 'Multi-platform application combining web and mobile technologies with rich UI components, Firebase integration, and modern build tools.',
    tech: ['React', 'Kotlin', 'Mantine UI', 'Tailwind CSS'],
    icon: 'fas fa-laptop-code',
    codeLink: 'https://github.com/VinceKimlo/IT342-SKyber',
    demoLink: 'https://skyber-coral.vercel.app'
  },
  {
    title: 'FitQuest Fitness Tracker',
    description:  'Mobile-native Android app for tracking workouts, setting fitness goals, and monitoring progress with customizable routines and achievements.',
    tech: ['Kotlin', 'Android SDK', 'Firebase'],
    icon:  'fas fa-mobile-alt',
    codeLink: 'https://github.com/Enriquez-EthanM/FitQuest',
    demoLink: '#'
  },
  {
    title:  'PromptQuest Game',
    description: 'Interactive web-based game developed for Galactic Pulse Hackathon with engaging UI and custom styling.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: 'fas fa-gamepad',
    codeLink: 'https://github.com/Japh11/PromptQuest--Galactic-Pulse-Hackathon-',
    demoLink:  '#'
  }
];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
