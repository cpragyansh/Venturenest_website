// // "use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./eco.css";

export default function Eco() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch only ecosystem partners
    axios
      .get("https://venturenest.onrender.com/getpartner?category=ecosystem") // Update API URL if needed
      .then((response) => {
        setPartners(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ecosystem partners:", error);
      });
  }, []);

  return (
    <div className="partners-container">
      {/* Background Image */}
      <img src="/assets/corosuel-bg.png" alt="Background" className="background-image" />

      {/* Content Overlay */}
      <div className="partners-content">
        <h2 className="eco-partners-title">Collaborative Ecosystem Partners</h2>
        <div className="gov-description-wrapper">
  <p className="gov-description">
    We  <strong> are backed partners </strong> by a dynamic ecosystem of educational institutions, incubation centres, innovation labs and industry bodies that jointly contribute to capacity-building, research, knowledge-sharing and startup mentorship across sectors.


 </p>
  <hr className="gov-divider" />
</div>
        <div className="partners-grid">
          {partners.length > 0 ? (
            partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                {/* Use Cloudinary URL directly */}
                <img src={partner.imgpath} alt={partner.Name} className="ecosystem-partners-main-photo-direct" />
                <div className="partner-name">{partner.Name}</div>
              </div>
            ))
          ) : (
            <p>No ecosystem partners available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
