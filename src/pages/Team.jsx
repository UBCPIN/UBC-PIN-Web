import React from 'react';
import './Team.css';

const Team = () => {
  const researchGroups = [
    {
      id: 1,
      name: 'New Medicine',
      icon: '🧪',
      description: 'Exploring cutting-edge pharmaceutical innovations and breakthrough treatments'
    },
    {
      id: 2,
      name: 'Epidemiology',
      icon: '📊',
      description: 'Studying disease patterns, public health impacts, and population health trends'
    },
    {
      id: 3,
      name: 'Viruses & Diseases',
      icon: '🦠',
      description: 'Researching viral infections, disease mechanisms, and emerging pathogens'
    },
    {
      id: 4,
      name: 'Pharma Fun Facts',
      icon: '🤓',
      description: 'Sharing fascinating pharmaceutical trivia and surprising science discoveries'
    }
  ];

  const executives = [
    { 
      name: 'Songhee Yang (Joy)', 
      faculty: 'Science', 
      position: 'Founder, President', 
      subgroup: 'Epidemiology',
      photo: '/UBC-PIN-Web/images/team/joy.jpg',
      linkedin: 'https://www.linkedin.com/in/songhee-yang-711608347/'
    },
    { 
      name: 'Coco Zhao', 
      faculty: 'Pharmaceutical Sciences', 
      position: 'Co-Founder, Vice President', 
      subgroup: 'New Medicine',
      photo: '/UBC-PIN-Web/images/team/coco.jpeg',
      linkedin: 'https://www.linkedin.com/in/coco-zhao-20b59523a/'
    },
    { 
      name: 'Brianna Tang', 
      faculty: 'Science', 
      position: 'Co-Founder, Event Coordinator', 
      subgroup: 'Viruses & Diseases',
      photo: '/UBC-PIN-Web/images/team/brianna.png',
      linkedin: 'https://www.linkedin.com/in/brianna-tang-558b3114a/'
    },
    { 
      name: 'Alexandra Aur', 
      faculty: 'Arts', 
      position: 'Co-Founder, Secretary', 
      subgroup: 'Pharma Fun Facts',
      photo: '/UBC-PIN-Web/images/team/alexandra.jpg',
      linkedin: 'https://www.linkedin.com/in/alexandraaur000/'
    }
  ];

  const pinsiders = [
    { name: 'Member 1', faculty: 'Science', subgroup: 'Epidemiology' },
    { name: 'Member 2', faculty: 'Pharmaceutical Sciences', subgroup: 'New Medicine' },
    { name: 'Member 3', faculty: 'Science', subgroup: 'Virus/Disease' },
    { name: 'Member 4', faculty: 'Arts', subgroup: 'Fun Facts' },
    { name: 'Member 5', faculty: 'Science', subgroup: 'Epidemiology' }
  ];

  return (
    <div className="team">
      <section className="team-header">
        <h1>Our Team</h1>
        <p className="subtitle">Research Groups</p>
      </section>

      <section className="research-groups">
        <h2>Introduce 4 Subgroups of Research</h2>
        <div className="groups-grid">
          {researchGroups.map(group => (
            <div key={group.id} className="group-card">
              <div className="group-icon">{group.icon}</div>
              <div className="group-number">{group.id}</div>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="executive-team">
        <h2>Executive Team</h2>
        <div className="executives-grid">
          {executives.map((exec, index) => (
            <a 
              key={index} 
              href={exec.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="member-card executive-card">
                <div className="member-photo">
                  <img src={exec.photo} alt={exec.name} className="member-img" />
                </div>
                <h3>{exec.name}</h3>
                <p className="faculty">{exec.faculty}</p>
                <p className="position">{exec.position}</p>
                <p className="subgroup">{exec.subgroup}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="pinsiders">
        <h2>PINsiders</h2>
        <div className="pinsiders-group-photo">
          <img src="/UBC-PIN-Web/images/team/pinsiders-group.jpg" alt="PINsiders Group" />
        </div>
        <div className="pinsiders-grid">
          {pinsiders.map((member, index) => (
            <div key={index} className="member-card pinsider-card">
              <h4>{member.name}</h4>
              <p className="faculty">{member.faculty}</p>
              <p className="subgroup">{member.subgroup}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;