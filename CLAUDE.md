# UBC PIN Website - Product Requirements Document (PRD)

## Project Overview
Build a modern, engaging website for UBC's Pharmaceutical Innovators Network (PIN) club that reflects their brand identity and serves both current members and prospective students.

## Design Style Guidelines
Based on the provided LinkedIn poster designs, the website should incorporate:

### Visual Identity
- **Color Palette**: Deep navy blue (#2B3A67), bright yellow/gold (#F4D03F), red accent (#E74C3C), white backgrounds
- **Typography**: Bold, blocky fonts for headers (similar to poster style), clean sans-serif for body text
- **Iconography**: Pharmaceutical-themed illustrations (pills, DNA helixes, molecular structures, lab equipment, viruses)
- **Layout**: Mix of yellow and navy sections with white content areas, modern flat design with subtle shadows

### Brand Elements
- PIN logo with heartbeat line and pill icon (consistent across all pages)
- Pharmaceutical/medical illustrations and icons
- Professional yet approachable tone
- Scientific accuracy in content presentation

## Site Structure & Pages

### 1. Home Page
**Purpose**: Welcome visitors and introduce UBC PIN
**Content**:
- Hero section with "UBC Pharmaceutical Innovators Network" title and group photo
- Club introduction and mission statement
- Goals: research, posts/videos, presentations
- Recent events/announcements section with links to popular content
- Call-to-action to join or learn more

### 2. Our Team Page
**Purpose**: Showcase the club's structure and members
**Content**:
- Research subgroups introduction (4 groups):
  1. **Epidemiology** - Short description with icons
  2. **New Medicine** - Examples like Naloxone for opioid overdose
  3. **Virus/Disease** - Examples like HIV, MPOX research
  4. **Fun Facts** - Engaging pharmaceutical trivia
- **Executive Team** section with member cards:
  - Photo placeholders
  - Name, Faculty, Position, Research subgroup
- **PINsiders** section (general members)
  - Grid layout of member profiles

### 3. Events Page
**Purpose**: Highlight both academic and social activities
**Content**:
- Page subtitle: "We are not just a club, we do social outings too!"
- Event categories:
  - **Academic Events**: Research presentations, guest speakers
  - **Social Events**: Bowling, end of term parties
- Event cards with images and descriptions
- Past events gallery
- Upcoming events calendar integration

### 4. Join Us Page
**Purpose**: Recruit new members and explain application process
**Content**:
- Welcome message to prospective members
- **Application Process**:
  - Google Forms + Interview process
  - Open vs. closed application periods
- **How to become a PINsider**:
  - Application requirements
  - Timeline and deadlines
  - Selection criteria
- **Perks of membership**:
  - Research opportunities
  - Networking events
  - Skill development
  - Social activities

### 5. Contact Page
**Purpose**: Provide multiple ways to reach the club
**Content**:
- Response time message (~24-48 hours)
- **Contact Methods**:
  - UBC PIN Email (with option to contact specific executives)
  - Social media links:
    - Instagram (with live link)
    - LinkedIn (with live link)  
    - YouTube (with live link)
- Contact form for general inquiries
- Office hours or meeting information

## Technical Requirements

### Framework & Technology
- Modern web framework (React/Next.js preferred for component reusability)
- Responsive design (mobile-first approach)
- Fast loading times and SEO optimization
- Accessibility compliance (WCAG 2.1)

### Features
- **Navigation**: Fixed header with smooth scrolling
- **Interactive Elements**: 
  - Hover effects on team member cards
  - Event filtering and search
  - Social media integration
- **Content Management**: 
  - Easy content updates for events and team members
  - Image optimization and lazy loading
- **Forms**: 
  - Contact form with validation
  - Integration with Google Forms for applications

### Performance
- Mobile responsive across all devices
- Fast loading speeds (<3 seconds)
- Cross-browser compatibility
- Image optimization and compression

## Content Strategy
- Professional yet approachable tone
- Emphasis on both academic rigor and social community
- Regular content updates for events and achievements
- SEO-optimized content for university club searches
- Clear calls-to-action throughout the site

## Success Metrics
- Increased membership applications
- Higher engagement at events
- Improved club visibility on campus
- Professional web presence for recruitment and partnerships

## Timeline Considerations
- Development should prioritize core pages first (Home, Our Team, Join Us)
- Events and Contact pages can be implemented in phase 2
- Content population and testing phase
- Launch coordination with club's recruitment timeline

## Notes
- Maintain consistency with existing PIN branding from LinkedIn materials
- Ensure all pharmaceutical content is scientifically accurate
- Consider implementing a simple CMS for easy content updates by club executives
- Plan for future scalability as the club grows