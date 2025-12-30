import React, { useEffect, useState } from 'react'
import MainPage from '../Components/Mainpage/Mainpage'
import axios from 'axios'
import "../partner/ecosystem/eco.css"

export default function page() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://venturenest.onrender.com/getpartner?category=investor")
      .then(response => {
        setPartners(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching investors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='partners-container'>
      <MainPage headingText="Investor Venture Page"/>
      
      <div className="partners-content">
        {loading ? (
          <p className="text-center">Loading investors...</p>
        ) : (
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <img src={partner.imgpath} alt={partner.Name} className="ecosystem-partners-main-photo-direct" />
                <div className="partner-name">{partner.Name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

