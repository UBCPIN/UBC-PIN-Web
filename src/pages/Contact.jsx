import React, { useState } from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from '../components/SocialIcons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@ubcpin',
      url: 'https://www.instagram.com/ubcpin/',
      icon: <InstagramIcon />,
      color: '#E4405F'
    },
    {
      platform: 'LinkedIn',
      handle: 'UBC PIN',
      url: 'https://linkedin.com/company/ubc-pin',
      icon: <LinkedInIcon />,
      color: '#0077B5'
    },
    {
      platform: 'YouTube',
      handle: 'UBC PIN Channel',
      url: 'https://youtube.com/@ubcpin',
      icon: <YouTubeIcon />,
      color: '#FF0000'
    }
  ];

  const executives = [
    { position: 'President', email: 'president.pin@ubc.ca' },
    { position: 'VP Internal', email: 'internal.pin@ubc.ca' },
    { position: 'VP External', email: 'external.pin@ubc.ca' },
    { position: 'Secretary', email: 'secretary.pin@ubc.ca' }
  ];

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact</h1>
        <p className="subtitle">Resources</p>
      </section>

      <section className="response-time">
        <div className="response-message">
          <h2>Short message about ~24-48 hour response times</h2>
          <p>
            We aim to respond to all inquiries within 24-48 hours during the academic year. 
            Please note that response times may be longer during exam periods and university breaks.
          </p>
        </div>
      </section>

      <section className="contact-methods">
        <div className="contact-content">
          <div className="email-section">
            <h2>UBC PIN Email</h2>
            <div className="main-email">
              <a href="mailto:ubcpin@ubc.ca" className="email-link">
                ubcpin@ubc.ca
              </a>
            </div>
            
            <div className="exec-emails">
              <h3>↳ Exec emails?</h3>
              <div className="exec-list">
                {executives.map((exec, index) => (
                  <div key={index} className="exec-contact">
                    <span className="exec-position">{exec.position}:</span>
                    <a href={`mailto:${exec.email}`} className="exec-email">
                      {exec.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="social-section">
            <h2>Connect with us on Social Media</h2>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ borderColor: social.color }}
                >
                  <div className="social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <div className="social-info">
                    <h3>UBC PIN @ {social.platform}</h3>
                    <span className="social-handle">{social.handle}</span>
                  </div>
                  <div className="link-button">Link</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;