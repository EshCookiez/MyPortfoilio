import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer with a strong foundation in computer science and a love for creating innovative solutions. Currently seeking internship and full-time opportunities to apply my skills and contribute to meaningful projects.
            </p>
            <p>
              With experience in various programming languages and frameworks, I enjoy tackling complex problems and building applications that make a difference. I'm a quick learner, team player, and always eager to explore new technologies.
            </p>
            <div className="about-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location: Your City, Country</span>
              </div>
              <div className="info-item">
                <i className="fas fa-graduation-cap"></i>
                <span>Education: Your University/Degree</span>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <span>Status: Available for Internships</span>
              </div>
            </div>
            <a href="/resume.pdf" className="btn btn-primary" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
