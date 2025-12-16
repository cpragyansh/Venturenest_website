// // "use client"
import React, { useEffect, useState } from "react";
import MainPage from "../../Components/Mainpage/Mainpage";
import axios from "axios";
// import Image from "next/image";
import './Photo.css';
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

export default function Photos() {
  const [Path, SetPath] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/photos");
        SetPath(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
       <Typography variant="h4" textAlign="center" fontWeight="bold" pt={4} mb={2} sx={{pt:{xs:"20%",lg:"2vw"}}}>
        Photos
      </Typography>
      <div className="flex justify-center main-photo-container">
        <div className="flex justify-center items-center flex-wrap ">
        {Path.length > 0 ? (
  Path.map((item, index) => (
    <div key={item.id} onClick={() => handleImageClick(item)}>
      <div className="gallery-container">
        <div className="gallerys">
          <div className={`gallery-row-one gallery-main ${index % 2 === 0 ? "big-box" : "small-box"}`}>
            <div className="gallery">
              <img
                className="background-image-vv-photo"
                src={item.imageUrl} 
                alt={item.photoName} 
              />
              <div className="head-gallery">{item.photoName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  <div>Loading...</div>
)}

        </div>
      </div>

      {/* Popup for image */}
      {popupVisible && selectedImage && (
        <div className={`popup-overlay ${popupVisible ? "active" : ""}`} onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <img
              className="popup-image"
              src={selectedImage.imageUrl} // Ensure this matches the correct property name in your MongoDB
              alt={selectedImage.photoName} // Ensure this matches the correct property name in your MongoDB
              width={800}
              height={500}
            />
            <div className="popup-description">
              <h2>{selectedImage.photoName}</h2>
              {/* Optional: Add a description */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
