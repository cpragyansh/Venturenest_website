// 'use client';

import React, { useEffect, useState } from "react";
import MainPage from "../Components/Mainpage/Mainpage";
import './Startups.css';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Box,
  Grid,
  Typography,
  Button,
  Modal,
  IconButton,
  Collapse,
  Card
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./logoCarousel.css";
//  custom styling (optional)

const logos = [
  // "/assets/dummylogo.png",
  "/assets/Start-up-logos/5(3 - Karan Agrawal.png",
  "/assets/Start-up-logos/1749710321866 - Aditya Raj Saxena.jpg",
  "/assets/Start-up-logos/file_00000000fa6861f8b46d40c35e6646b9_conversation_id=67fe9c73-e260-8006-bab2-ec35ca4f9089 - Juara Organics.png",
  "/assets/Start-up-logos/IMG-20231230-WA0023(2) - Anand Kumar.jpg",
  "/assets/Start-up-logos/IMG-20250208-WA0007 - Shekhar kashyap.jpg",
  "/assets/Start-up-logos/IMG-20250611-WA0000 - arpit kumar.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0000 - JIGYASA GARG.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - Navneet Yaduvanshi.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0004 - SHAGUN SHARMA.jpg",
  "/assets/Start-up-logos/IMG-20250612-WA0005 - Mayank Dahiya.jpg",
  "/assets/Start-up-logos/Logo - Harris Babbar.png",
  "/assets/Start-up-logos/SAVE_20250611_152058 - Pulkesh Gautam.jpg",
  "/assets/Start-up-logos/Screenshot_2025-03-06-23-58-39-73_6012fa4d4ddec268fc5c7112cbb265e7 - Aryan Mankotia.jpg",
  "/assets/Start-up-logos/Screenshot_2025-06-12-18-15-12-052_com.whatsapp-edit - Vedant Daware.jpg",
  "/assets/Start-up-logos/stacked wordmark black - ansh haritash.png",
  "/assets/Start-up-logos/Techealth_logo - TecHealth.png",
  "/assets/Start-up-logos/tHM LOGO - Abhishek Sharma.png",
  "/assets/Start-up-logos/VeeGamma Logo Design in Gradient__endoftext__ - Vanshika.png",
];

export default function Startups() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortType, setSortType] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    const fetchData = async () => {
      try {
        const response = await axios.get('https://venturenest.onrender.com/getstartup');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching startups:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = sortType === "all" ? data : data.filter(item => item.StartupType === sortType);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, filteredData.length);
  const currentData = filteredData.slice(startEntry - 1, endEntry);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* <MainPage headingText="Incubated Ventures" className="portfolio-page-main-top-page-heading"/> */}

      <section className="w-full py-8 ">
        <div className="max-w-7xl mx-auto px-4">
          <Typography variant="h4" textAlign="center" fontWeight="bold" pt={4} mb={2} sx={{ pt: { xs: "20%", lg: "2vw" } }}>
            Incubated Ventures
          </Typography>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 600, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center p-6 mb-12" >
                  <div className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <img
                      src={logo}
                      alt={`Startup Logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <div className="patent-main-bg-container">
        <div className="pagination-controls">
          <span className="entries-info">
            Showing {startEntry} to {endEntry} of {filteredData.length} entries
          </span>
          <select value={entriesPerPage} onChange={handleEntriesChange} className="entries-dropdown">
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </select>
          {/* <select value={sortType} onChange={handleSortChange} className="sort-dropdown">
            <option value="all">All Startups</option>
            <option value="Virtual">Virtual</option>
            <option value="Physical">Physical</option>
          </select>
          <select value={sortType} onChange={handleSortChange} className="sort-dropdown">
            <option value="all">Registration Status</option>
            <option value="Private Limited">Private Limited</option>
            <option value="Partnership">Partnership</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Not Registered">Not Registered</option>
            <option value="DIPP No">DIPP No</option>
          </select> */}
        </div>
        <div className="table-wrapper">
          <table className="table-main-body">
            <thead>
              <tr>
                <th data-aos="fade-down">Sr. No</th>
                <th data-aos="fade-down">Venture Name </th>
                {/* <th data-aos="fade-down">CIN</th> */}
                <th data-aos="fade-down">Founders </th>
                {/* <th data-aos="fade-down">Website</th> */}
                <th data-aos="fade-down">Venture Overview </th>
                {/* <th data-aos="fade-down">Startup Type</th> */}
                <th data-aos="fade-down">Registration Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={item._id} data-aos-delay={index * 100}>
                    <td>{startEntry + index}</td>
                    <td>{item.StartupName}</td>
                    {/* <td>{item.CIN}</td> */}
                    <td>{item.FounderName}</td>
                    {/* <td>{item.Website}</td> */}
                    <td>{item.ProductName}</td>
                    {/* <td>{item.StartupType}</td> */}
                    <td>{item.RegistrationStatus}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-data">No startups found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination-buttons">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </>
  );
}
