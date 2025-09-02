import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-title-section">
              <h1 className="hero-title">
                <div className="title-line">
                  <span className="title-prefix">UBC</span>
                  <span className="title-main"><span className="title-p">P</span>harmaceutical</span>
                </div>
                <div className="title-line">
                  <span className="title-prefix"></span>
                  <span className="title-main"><span className="title-i">I</span>nnovators</span>
                </div>
                <div className="title-line">
                  <span className="title-prefix"></span>
                  <span className="title-main"><span className="title-n">N</span>etwork</span>
                </div>
              </h1>
            </div>
            <div className="hero-image">
              <img src="/UBC-PIN-Web/images/team/group-photo.jpeg" alt="UBC PIN Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-content">
          <h2>Introduction / Description of Club</h2>
          <div className="goals">
            <div className="goal-item">
              <span className="goal-bullet">•</span>
              <span>Goals</span>
            </div>
            <div className="goal-item">
              <span className="goal-bullet">•</span>
              <span>Research</span>
            </div>
            <div className="goal-item">
              <span className="goal-bullet">•</span>
              <span>Posts, videos, presentations</span>
            </div>
          </div>
          <p className="intro-text">
            Pharmaceutical Innovators Network (PIN) is a student-led academic club at UBC dedicated to 
            exploring pharmaceutical sciences beyond textbooks and lectures. We were founded to fill a gap—a 
            lack of accessible, engaging spaces where students could dive deeper into real-world pharma topics, 
            research, and innovation.
          </p>
          <p className="intro-text">
            At PIN, we bring pharmaceutical science to life through biweekly meetings, research-based social 
            media posts, creative short video presentations, and professional interviews with professors and 
            experts. Whether you're passionate about drug development, public health, or pharma policy, PIN 
            offers a space to grow your curiosity, build your confidence, and connect with peers who are just 
            as excited about making an impact.
          </p>
        </div>
      </section>

      <section className="recent-events">
        <div className="events-content">
          <h2>Recent Events or Announcements</h2>
          <div className="events-list">
            <div className="event-card">
              <h3>Latest Research Presentation</h3>
              <p>Exploring new frontiers in drug delivery systems</p>
              <Link to="/events" className="event-link">Learn more →</Link>
            </div>
            <div className="event-card">
              <h3>Guest Speaker Series</h3>
              <p>Industry professionals share their insights</p>
              <Link to="/events" className="event-link">Learn more →</Link>
            </div>
            <div className="event-card">
              <h3>Join Our Team!</h3>
              <p>Applications now open for new PINsiders</p>
              <Link to="/join" className="event-link">Apply now →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Join?</h2>
          <p>Become part of UBC's premier pharmaceutical innovation community</p>
          <Link to="/join" className="cta-button">Join PIN Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;