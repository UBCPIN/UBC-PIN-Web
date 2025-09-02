import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
  const perks = [
    {
      icon: '🔬',
      title: 'Research & Communication',
      description: 'Sharpen skills as both students and science communicators'
    },
    {
      icon: '🤝',
      title: 'Networking Events',
      description: 'Connect with industry professionals and fellow students'
    },
    {
      icon: '📈',
      title: 'Professional Growth',
      description: 'Build confidence and expertise as future leaders in the field'
    },
    {
      icon: '🎉',
      title: 'Social Activities',
      description: 'Join fun social events and build lasting friendships'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our Google Form with your information and interests'
    },
    {
      step: 2,
      title: 'Interview',
      description: 'Meet with our executive team for a casual conversation'
    },
    {
      step: 3,
      title: 'Welcome to PIN!',
      description: 'Get your welcome package and join our community'
    }
  ];

  return (
    <div className="join-us">
      <section className="join-header">
        <h1>Join Us</h1>
        <div className="welcome-message">
          <h2>Message from us to new members</h2>
          <p>
            Welcome to UBC PIN! We're excited that you're interested in joining our community of 
            pharmaceutical innovators. We blend academic enrichment with public outreach—because 
            learning doesn't end in the classroom, and science should be shared. Whether you're 
            passionate about drug development, public health, or pharma policy, PIN offers a space 
            to grow your curiosity, build your confidence, and connect with peers who are just as 
            excited about making an impact.
          </p>
        </div>
      </section>

      <section className="application-process">
        <h2>Info about our application process</h2>
        <div className="process-info">
          <div className="process-card">
            <h3>📝 Google Forms + Interview</h3>
            <p>Our application process consists of a simple Google Form followed by a friendly interview with our executive team.</p>
          </div>
          <div className="process-card">
            <h3>📅 Open or Closed</h3>
            <p>Applications open at the beginning of each semester. Check our social media for exact dates!</p>
            <div className="status-badge open">Currently OPEN for applications!</div>
          </div>
        </div>

        <div className="steps-container">
          <h3>Application Steps</h3>
          <div className="steps-grid">
            {applicationSteps.map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="become-pinsider">
        <h2>How to become a PINsider</h2>
        <div className="requirements">
          <h3>Requirements</h3>
          <ul>
            <li>Be a current UBC student</li>
            <li>Have an interest in pharmaceutical sciences</li>
            <li>Commit to attending regular meetings</li>
            <li>Contribute to at least one research subgroup</li>
          </ul>
        </div>

        <div className="perks-section">
          <h3>Perks of being a PINsider</h3>
          <div className="perks-grid">
            {perks.map((perk, index) => (
              <div key={index} className="perk-card">
                <div className="perk-icon">{perk.icon}</div>
                <h4>{perk.title}</h4>
                <p>{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Apply?</h2>
        <p>Join UBC's premier pharmaceutical innovation community today!</p>
        <a 
          href="https://forms.google.com/your-form-link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="apply-button"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default JoinUs;