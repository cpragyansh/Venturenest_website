// "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Council.css';

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
      <div className="council-block-2-main-bg-img-section">
        <div className="council-block-1-main-heading">
          <h1 className="council-block-2-head-main-text-area">Tech & Innovation Council</h1>
        </div>
        
        <div className="council-block-1-mian-images-section-details">
          {members.length > 0 ? (
            members.map((member, index) => (
              <div key={index} className="council-block-1-in-person-image-blocks">
                <div className="council-members-details-2st-block">
                  <img src={member.imgpath} alt={member.name} className="council-block-1-in-person-main-img" />
                </div>
                <div className="coucil-block-1-members-details-main-container">
                  <h1 className="council-block-1-in-person-name council-block-odd-non-bg-container-text-color">
                    {member.name}
                  </h1>
                  <h1 className="council-block-1-in-person-company-detail council-block-odd-non-bg-container-text-color">
                    {member.company}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <p className="no-members-message">No Tech & Innovation council members found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
