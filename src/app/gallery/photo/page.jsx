// // "use client"
import React, { useEffect, useState } from "react";
import MainPage from "../../Components/Mainpage/Mainpage";
import axios from "axios";
// import Image from "next/image";
import DomeGallery from "../../Components/ui/DomeGallery";
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
        let photos = response.data;
        if (photos.length > 0) {
          // Fill gallery to ~100 items by repeating the existing photos
          while (photos.length < 200) {
            photos = [...photos, ...response.data];
          }
          photos = photos.slice(0, 200); // Limit to 100
        }
        SetPath(photos);
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

  // Skeleton data for initial load
  const skeletons = Array(50).fill({ skeleton: true });
  const displayImages = Path.length > 0 ? Path : skeletons;

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#fff' }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ py: 2, color: '#a40c1a', zIndex: 10, borderBottom: '1px solid #eee' }}>
        Photos
      </Typography>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>

        {/* Left Split (50%) - Theme White */}
        <div style={{ width: '50%', height: '100%', position: 'relative', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ padding: '4rem', maxWidth: '600px' }}>
            <Typography variant="h3" sx={{ fontWeight: '800', color: '#a40c1a', mb: 2, lineHeight: 1 }}>
              Capturing<br />Memories
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Explore the moments that define our journey. From workshops to bootcamps, every snapshot tells a story of innovation and growth at VentureNest.
            </Typography>
          </div>
        </div>

        {/* Right Split (50%) - Dome Gallery */}
        <div style={{ width: '50%', height: '100%' }}>
          <DomeGallery images={displayImages} onImageClick={handleImageClick} />
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
    </div>
  );
}
