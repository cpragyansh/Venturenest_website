// "use client"
import React, { useEffect, useState } from "react";
import axios from "axios"; // For making API requests
import "../ecosystem/eco.css";

export default function GovCatalyst() {
  const [partners, setPartners] = useState([]); // State to store fetched partners
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch investor partners from backend
    const fetchPartners = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/getpartner?category=government");
        setPartners(response.data); // Store the fetched data in state
      } catch (err) {
        console.error("Error fetching partners:", err);
        setError("Failed to load partners");
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="partners-container">
      {/* Background Image */}
      <img src="/assets/corosuel-bg.png" alt="Background" className="background-image" />

      {/* Content Overlay */}
      <div className="partners-content">
        <h2 className="eco-partners-title">Government Catalyst</h2>
<div className="gov-description-wrapper">
  <p className="gov-description">
    We  <strong>proudly collaborate</strong> with key government bodies and state-led startup missions that act as catalysts for policy support, regulatory guidance and public-sector innovation alignment to accelerate the growth of startups in our ecosystem.
 </p>
  <hr className="gov-divider" />
</div>

        {/* Show loading or error messages */}
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {/* Partners Grid */}
        {!loading && !error && (
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.imgpath} alt={partner.Name}  className="ecosystem-partners-main-photo-direct"/>
                <div className="partner-name">{partner.Name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
