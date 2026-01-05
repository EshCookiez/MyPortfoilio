import { useState, useEffect } from 'react';
import '../styles/Particles.css';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 150; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          duration: Math.random() * 15 + 15,
          delay: Math.random() * 5,
          size: Math.random() * 6 + 2,
        });
      }
      setParticles(particleArray);
    };

    generateParticles();
  }, []);

  return (
    <div id="particles-js" className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
