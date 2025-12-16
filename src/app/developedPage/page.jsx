import React from 'react';
import MainPage from '../Components/Mainpage/Mainpage';
import './developed.css';

const developers = [
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    // skills: "SKILLS LOGOS",
    image: "assets/prg2.jpg",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Pragyansh Chauhan",
    profession: "Developer",
    company: "CGC University",
    image: "assets/prg4.jpg", // Add the correct image path
    socialLinks: {
      twitter: "#",
      instagram: "#",
      github: "#",
      linkedin: "#"
    }
  },
 
];

export default function DevelopersPage() {
  return (
    <div>
      <MainPage headingText="Developers" />
      <div className="profile-cards">
        {developers.map((dev, index) => (
          <div className={`card card-${index + 1}`} key={index}>
            <div className="card-description">
              <h2 className="card-description-title">{dev.name}</h2>
              <span className="card-description-profession">{dev.profession}</span>
              <span className="card-description-company">{dev.company}</span>
              <span className="card-description-skills">{dev.skills}</span>
              <div className="card-description-social">
                <span className="card-description-social-follow">Follow!</span>
                <ul>
                  {Object.keys(dev.socialLinks).map((key) => (
                    <li key={key}>
                      <a href={dev.socialLinks[key]} target="_blank" rel="noopener noreferrer">
                        {key === 'twitter' && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        )}
                        {key === 'instagram' && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                        )}
                        {key === 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.7-.19-3.48-.84-3.48-3.73 0-.82.29-1.49.76-2.01-.08-.19-.33-.95.07-1.97 0 0 .63-.2 2.06.76.6-.17 1.25-.25 1.89-.26.64 0 1.29.09 1.89.26 1.43-.96 2.06-.76 2.06-.76.4 1.02.15 1.78.07 1.97.47.52.76 1.19.76 2.01 0 2.89-1.78 3.54-3.48 3.73.29.25.54.75.54 1.51 0 1.09-.01 1.98-.01 2.25 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        )}
                        {key === 'linkedin' && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M1.146 0A1.146 1.146 0 0 0 0 1.146v13.708A1.146 1.146 0 0 0 1.146 16h13.708A1.146 1.146 0 0 0 16 14.854V1.146A1.146 1.146 0 0 0 14.854 0H1.146zm3.45 14.478H2.679V7.437h1.917v7.041zm-1.458-8.019a1.115 1.115 0 1 1 0-2.229 1.115 1.115 0 0 1 0 2.229zm9.77 8.019h-1.917v-3.828c0-.912-.016-2.083-1.267-2.083-1.267 0-1.46.995-1.46 2.022v3.889H8.677V7.437h1.84v.963h.026c.257-.486.884-1 1.823-1 1.95 0 2.308 1.284 2.308 2.947v4.637z" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={dev.image} className="card-image" alt={dev.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
