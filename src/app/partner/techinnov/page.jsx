// "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Council/Council.css';

export default function TechInnovCouncil() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch council members from backend
    axios.get('https://venturenest.onrender.com/council-members?category=techInnov')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching council members:', error);
      });
  }, []);

  return (
    <div>
      <div className="council-block-1-main-bg-img-section">
        {/* <div className="council-block-1-main-heading">
          <h1 className="council-block-1-head-main-text-area">Technology and Innovation Council</h1>
        </div> */}


        <div className="council-block-1-main-heading">
          <h1 className="council-block-1-head-main-text-area">Technology and Innovation Council</h1>

          <div className="council-description-wrapper">
            <p className="council-description">
              The <strong>Technology and Innovation Council</strong>  supports startups in adopting emerging technologies, accelerating product development and fostering a culture of innovation. Members offer expertise in R&D, tech integration and innovation strategies that drive high-impact, competitive and future-ready solutions.
            </p>
            <hr className="council-divider" />
          </div>
        </div>
        <div className="council-block-1-mian-images-section-details">
          {members.length > 0 ? (
            members.map((member, index) => (
              <div key={index} className="council-block-1-in-person-image-blocks">
                <div className="council-members-details-1st-block">
                  <img src={member.imgpath} alt={member.name} className="council-block-1-in-person-main-img" />
                </div>
                <div className="coucil-block-1-members-details-main-container">
                  <h1 className="council-block-1-in-person-name">
                    {member.name}
                  </h1>
                  <h1 className="council-block-1-in-person-company-detail">
                    {member.company}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <p className="no-members-message">No Legal & Compliance council members found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
