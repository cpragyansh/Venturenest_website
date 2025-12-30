// "use client"
import React, { useEffect, useState } from "react";
import "../ecosystem/eco.css";

export default function Invest() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch investors from backend
    const fetchInvestors = async () => {
      try {
        // const response = await fetch("http://your-backend-url/ourpartner?category=investor");
        const response = await fetch("https://venturenest.onrender.com/getpartner?category=investor");
        if (!response.ok) {
          throw new Error("Failed to fetch investor partners");
        }
        const data = await response.json();
        setInvestors(data); // Update state with fetched investors
        setLoading(false);
      } catch (error) {
        console.error("Error fetching investors:", error);
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  return (
    <div className="partners-container bg-repeat-y">
      {/* Background Image */}
      <img src="/assets/corosuel-bg.png" alt="Background" className="background-image" />

      {/* Content Overlay */}
      <div className="partners-content">
        <h2 className="eco-partners-title">Strategic Investment Partners</h2>
        <div className="gov-description-wrapper">
          <p className="gov-description">
            Our  <strong>strategic investment partners </strong> include reputed angel networks, venture capital firms and private investors who actively support our startups with funding, mentorship and strategic growth advisory to help them scale sustainably.

          </p>
          <hr className="gov-divider" />
        </div>

        {loading ? (
          <p>Loading investors...</p>
        ) : investors.length === 0 ? (
          <p>No investors found.</p>
        ) : (
          <div className="partners-grid">
            {investors.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.imgpath} alt={partner.Name} className="ecosystem-partners-main-photo-direct" />
                <div className="partner-name">{partner.Name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
