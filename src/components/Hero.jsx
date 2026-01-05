import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">JV Bayona</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer | Game Development | AI Automation | Problem Solver</p>
          <p className="hero-description">
            I'm a versatile developer with hands-on experience in web and backend development. Passionate about game development, AI automation, and building intelligent systems. Leveraging strong architecture and system design skills to create engaging interactive experiences and streamlined workflows.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/EshCookiez" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jaevie-bayona-254378168/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a href="mailto:jaevie.bayona14@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src="/files/Jv.png" alt="JV Bayona" className="avatar-image" />
          <p className="avatar-text">JV Bayona</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
