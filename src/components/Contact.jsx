import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';
import { follow } from './follow';
import './Contact.css';

// EmailJS's public key and IDs are meant to live in the browser; the template
// decides where messages go.
const EMAILJS = { publicKey: 'PlJ0hLQZWnOGuG4CH', service: 'service_3xz0frw', template: 'template_4dr3tcv' };

const EMPTY = { name: '', email: '', message: '' };

// Contact, with the footer at the bottom of the same section.
const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState('idle'); // idle | sending | sent | failed

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: profile.email },
        { publicKey: EMAILJS.publicKey },
      );
      setForm(EMPTY);
      setState('sent');
    } catch {
      setState('failed');
    }
  };

  return (
    <section id="contact" className="section surface-b contact" aria-labelledby="contact-title" data-reveal>
      <div className="container">
        <div className="contact-grid">
          <div>
            <p {...follow(0, 'eyebrow')}>Contact</p>
            <h2 id="contact-title" {...follow(1, 'contact-title')}>
              Let’s build something.
            </h2>
            <p {...follow(2, 'contact-intro')}>I’m open to new roles. Send a message, or write to me directly.</p>
            <p {...follow(3)}>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p {...follow(4, 'contact-links')}>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                Resume (PDF)
              </a>
            </p>
          </div>

          <form {...follow(3, 'contact-form')} onSubmit={submit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" placeholder="you@company.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={update} required placeholder="What would you like to build?" />
            </label>
            <button type="submit" className="contact-send" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className={`contact-status ${state}`} role="status" aria-live="polite">
              {state === 'sent' && 'Thanks! Your message was sent. I’ll reply by email.'}
              {state === 'failed' && (
                <>
                  The message didn’t send. Please try again, or email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </>
              )}
            </p>
          </form>
        </div>

        <footer className="footer">
          <span className="footer-name">{profile.name}</span>
          <span>© {new Date().getFullYear()} · {profile.location}</span>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
