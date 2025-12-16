// "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Council/Council.css';

export default function InvestandFund() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch council members from backend
    axios.get('https://venturenest.onrender.com/council-members?category=investfund')
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
  <h1 className="council-block-1-head-main-text-area">Investment and Funding Council</h1>

  <div className="council-description-wrapper">
    <p className="council-description">
      The <strong>Investment and Funding Council </strong> empowers startups with critical financial knowledge, investor readiness and access to funding networks. Council members provide guidance on fundraising strategies, pitch development and investor connections—ensuring that startups are well-equipped to secure capital and scale confidently.


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
            <p className="no-members-message">No Investment and Funding members found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
