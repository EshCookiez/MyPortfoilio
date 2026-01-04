import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'TypeScript']
    },
    {
      title: 'Web Development',
      icon: 'fas fa-laptop-code',
      skills: ['HTML/CSS', 'React', 'Node.js', 'Express', 'REST APIs']
    },
    {
      title: 'Database & Tools',
      icon: 'fas fa-database',
      skills: ['SQL', 'MongoDB', 'Git', 'Docker', 'AWS']
    },
    {
      title: 'Other Skills',
      icon: 'fas fa-brain',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Agile', 'Team Collaboration']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
