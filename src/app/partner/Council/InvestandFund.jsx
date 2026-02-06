// "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Council.css';

export default function InvestandFund() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch council members from backend
    axios.get((window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in')) + '/council-members?category=investfund')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching Investment and Funding members:', error);
      });
  }, []);

  return (
    <div>
      <div className="council-block-1-main-bg-img-section">
        <div className="council-block-1-main-heading">
          <h1 className="council-block-1-head-main-text-area">Investment and Funding</h1>
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
            <p className="no-members-message">No Investment and Funding members found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
