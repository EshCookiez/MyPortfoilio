import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init('PlJ0hLQZWnOGuG4CH');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'jaevie.bayona14@gmail.com'
    };

    emailjs
      .send('service_3xz0frw', 'template_4dr3tcv', templateParams)
      .then(() => {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm currently looking for internship and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <a href="mailto:jaevie.bayona14@gmail.com">jaevie.bayona14@gmail.com</a>
            </div>
            {/* <div className="contact-method">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div> */}
            <div className="contact-method">
              <i className="fab fa-linkedin"></i>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/jaevie-bayona-254378168/" target="_blank" rel="noopener noreferrer">Connect with me</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
