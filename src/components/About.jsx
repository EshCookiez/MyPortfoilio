import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a full-stack developer transitioning into game development with a focus on AI automation and intelligent systems. Currently seeking internship opportunities to apply my diverse skills in game studios and tech companies that are pushing the boundaries of interactive experiences.
            </p>
            <p>
              With hands-on experience in web, backend, game development, and AI automation, I excel at tackling complex problems and building scalable solutions. I'm a quick learner, passionate collaborator, and always eager to explore cutting-edge technologies at the intersection of gaming and AI.
            </p>
            <div className="about-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location: Cebu City, Philippines</span>
              </div>
              <div className="info-item">
                <i className="fas fa-graduation-cap"></i>
                <span>Education: Cebu Institute of Technology - University, Cebu City / Bachelors of Science in Information Technology </span>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <span>Status: Available for Internships</span>
              </div>
            </div>
            <a href="/files/resume.pdf" className="btn btn-primary" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
