import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB'],
      icon: 'fas fa-laptop-code',
      codeLink: '#',
      demoLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tech: ['JavaScript', 'Firebase', 'CSS'],
      icon: 'fas fa-tasks',
      codeLink: '#',
      demoLink: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with custom charts and filtering options.',
      tech: ['Python', 'D3.js', 'Flask'],
      icon: 'fas fa-chart-line',
      codeLink: '#',
      demoLink: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Mobile-responsive weather application with geolocation and 7-day forecast using weather API.',
      tech: ['JavaScript', 'API Integration', 'HTML/CSS'],
      icon: 'fas fa-mobile-alt',
      codeLink: '#',
      demoLink: '#'
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
