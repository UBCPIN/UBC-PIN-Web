import React from 'react';
import './Events.css';

const Events = () => {
  const socialEvents = [
    {
      title: 'Summer Social - Bowling Night',
      description: 'Team bonding at the lanes! Our first summer social brought together PINsiders for strikes, spares, and lots of laughs.',
      image: '/UBC-PIN-Web/images/events/IMG_1908.jpg',
      date: 'Summer 2024',
      isPhoto: true
    },
    {
      title: 'Team Outings',
      description: 'Regular social gatherings to build community and celebrate our achievements together!',
      image: '/UBC-PIN-Web/images/events/IMG_1909.jpg',
      date: 'Throughout the year',
      isPhoto: true
    }
  ];

  const academicEvents = [
    {
      title: 'Research Presentations',
      description: 'Members present their findings on cutting-edge pharmaceutical topics.',
      image: '📊',
      date: 'Bi-weekly'
    },
    {
      title: 'Guest Speaker Series',
      description: 'Industry professionals and researchers share their expertise.',
      image: '🎤',
      date: 'Monthly'
    },
    {
      title: 'Journal Club',
      description: 'Discussing the latest publications in pharmaceutical sciences.',
      image: '📚',
      date: 'Weekly'
    }
  ];

  const upcomingEvents = [
    {
      title: 'PIN Information Session',
      description: 'Learn about our club and how to join!',
      date: 'September 15, 2024',
      time: '5:00 PM',
      location: 'PHRM 1101'
    },
    {
      title: 'Pharmaceutical Innovation Workshop',
      description: 'Hands-on workshop on drug discovery processes.',
      date: 'September 22, 2024',
      time: '2:00 PM',
      location: 'Life Sciences Centre'
    }
  ];

  return (
    <div className="events">
      <section className="events-header">
        <h1>Events</h1>
        <p className="tagline">We are not just a club, we do social outings too!</p>
      </section>

      <section className="social-events">
        <h2>Social Events</h2>
        <div className="events-grid">
          {socialEvents.map((event, index) => (
            <div key={index} className="event-card social">
              <div className="event-image">
                {event.isPhoto ? (
                  <img src={event.image} alt={event.title} className="event-photo" />
                ) : (
                  event.image
                )}
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="event-date">{event.date}</span>
              <div className="event-waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="academic-events">
        <h2>Academic Events</h2>
        <div className="events-grid">
          {academicEvents.map((event, index) => (
            <div key={index} className="event-card academic">
              <div className="event-image">{event.image}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span className="event-date">{event.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="event-gallery">
        <h2>Event Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/UBC-PIN-Web/images/events/IMG_1911.jpg" alt="PIN Social Event" />
          </div>
          <div className="gallery-item">
            <img src="/UBC-PIN-Web/images/events/IMG_1921.jpg" alt="PIN Team Gathering" />
          </div>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="upcoming-list">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="upcoming-card">
              <div className="date-badge">
                <span className="date-day">{event.date.split(' ')[1].replace(',', '')}</span>
                <span className="date-month">{event.date.split(' ')[0].substring(0, 3)}</span>
              </div>
              <div className="upcoming-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;