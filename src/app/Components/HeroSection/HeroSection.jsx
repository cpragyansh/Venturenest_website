// 'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hero.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
     AOS.init({ duration: 1200, once: true });
    // Fetch images from the backend API
    const fetchImages = async () => {
      try {
        const response = await axios.get((window.API_BASE_URL || (window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in'))) + '/images'); // Adjust API URL if needed
        const data = response.data;

        // Assuming data[0] is the latest HeroSection entry
        const imageData = data[0]?.laptop || []; // Fetching 'laptop' images array, adjust if necessary

        // Map the images to the desired format, using Cloudinary URLs
        const formattedImages = imageData.map(img => ({
          id: img._id,
          src: img.path, // Assuming 'path' stores the Cloudinary URL
          alt: `Image ${img._id}`
        }));

        setImages(formattedImages);

      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  return (
    <div className="w-full h-[70vh] overflow-hidden relative hero-main-box"
     data-aos="fade-up" data-aos-duration="1200"
     >

    {/* Container with a full screen height */}
    <div
      className={`relative h-[90vh] flex transition-transform duration-1000 ease-in-out hero-main-2`}
      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      data-aos="fade-in" 
      data-aos-duration="1500" 
      data-aos-delay="200"
    >
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0" 
          data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p>No images available</p>
        </div>
      )}
    </div>
  </div>
  

  );
}
