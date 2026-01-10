import React from "react";
import "./Component_2.css";

const VentureNestIntro = () => {
  return (
    <section className="vn-wrapper">

      {/* Old welcome strip removed as it is now in Dashboard.jsx */}


      {/* ===== WHO ARE WE SECTION ===== */}
      <div className="vn-blue-section">
        <div className="vn-left">
          <h2>Who are we ?</h2>
          <p>
            CGC VentureNest is the premier business incubator at CGC University,
            designed to empower innovation, entrepreneurship, and sustainable
            business growth. As a dynamic startup hub, VentureNest provides a
            thriving ecosystem where aspiring entrepreneurs and early-stage
            startups can transform groundbreaking ideas into successful
            ventures.
          </p>

          <p>
            CGC VentureNest is the premier business incubator at CGC University,
            designed to empower innovation,
          </p>
        </div>

        <div className="vn-right">
          <div className="vn-logo-placeholder"> <img src="/assets/cgc_venturenest_logo_n1-modified.png" alt="" /></div>
        </div>
      </div>

      {/* ===== KEY HIGHLIGHTS SECTION ===== */}
      <div className="vn-red-section">
        <div className="vn-dots"></div>

        <div className="vn-red-content">
          <h2>Key Highlights</h2>
          <p>
            CGC VentureNest is the premier business incubator at CGC University,
            designed to empower innovation, entrepreneurship, and sustainable
            business growth. As a dynamic startup hub, VentureNest provides a
            thriving ecosystem where aspiring entrepreneurs and early-stage
            startups can transform groundbreaking ideas into successful
            ventures.
          </p>
        </div>
      </div>

    </section>
  );
};

export default VentureNestIntro;
