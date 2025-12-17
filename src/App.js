import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';  // Import the Layout component
// import Navbar from "./components/Navbar/Navbar";
// import Dashboard from "./Dashboard/Dashboard";
// import Footer from "./components/Footer/Footer";
// import Contact from "./contact/Contact";
// import About from "./about/About";
import AboutPage from "./app/about/page";
import Dashboard from "./app/Components/Dashboard/Dashboard";
import Member from "./app/Components/Members/Member";
import Contact from "./app/contact/page";
import Events from "./app/event/page";
import Photos from "./app/gallery/photo/page";
import Videos from "./app/gallery/video/page";
import JoinUs from "./app/Incubate_form/page";
import Accelerators from "./app/partner/Accelerator-collabrators/page";
import Advisory from "./app/partner/Advisory/page";
import Eco from "./app/partner/ecosystem/page";
import GovCatalyst from "./app/partner/government-catalyst/page";
import InvestandFund from "./app/partner/InvestandFund/page";
import LegalComplianceCouncil from "./app/partner/legalCompl/page";
import MentorshipCouncil from "./app/partner/Mentorship/page";
import TechInnovCouncil from "./app/partner/techinnov/page";
import Programs from "./app/Programs/page";
import Recognitions from "./app/recognitions/page";
import VIsion from "./app/vision/page";
import Invest from "./app/partner/Investment/page";
import Startups from "./app/invubatedstartup/page";
import ProgramDetails from "./app/Programs/[programName]/page";

// import Values from "./about/Values";

function App() {


  // Simulate loading process (e.g., fetching data, etc.)


  return (
    <div className="App">

      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/Members" element={<Member />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery/Photos" element={< Photos />} />
          <Route path="/Gallery/Videos" element={< Videos />} />
          <Route path="/IncubateWithUs" element={< JoinUs />} />
          <Route path="/Accelerator-Collabrators" element={< Accelerators />} />
          <Route path="/Advisory" element={< Advisory />} />
          <Route path="/Eco-System-Partners" element={< Eco />} />
          <Route path="/Government-Catalyst" element={< GovCatalyst />} />
          <Route path="/Investment-and-Funding" element={< InvestandFund />} />
          <Route path="/LegalCompliance" element={< LegalComplianceCouncil />} />
          <Route path="/Mentorship" element={< MentorshipCouncil />} />
          <Route path="/Technology-and-inovation" element={< TechInnovCouncil />} />
          <Route path="/Programs" element={< Programs />} />
          <Route path="/Programs/:programName" element={< ProgramDetails />} />
          <Route path="/Recognitions" element={< Recognitions />} />
          <Route path="/Vision" element={< VIsion />} />
          <Route path="/Invest" element={< Invest />} />
          <Route path="/Startups" element={< Startups />} />



        </Routes>
      </Layout>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
