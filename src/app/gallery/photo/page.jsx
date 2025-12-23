// "use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import DomeGallery from "../../Components/ui/DomeGallery";
import { Close, ZoomIn, ZoomOut, RestartAlt } from "@mui/icons-material";

export default function Photos() {
  const [Path, SetPath] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/photos");
        let photos = response.data;
        if (photos.length > 0) {
          // Fill gallery to ~150 items for density
          while (photos.length < 150) {
            photos = [...photos, ...response.data];
          }
          photos = photos.slice(0, 150);
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
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  // Skeleton data for initial load
  const skeletons = Array(50).fill({ skeleton: true });
  const displayImages = Path.length > 0 ? Path : skeletons;

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#fff', position: 'relative' }}>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none">
        <div>
          <h1 className="text-3xl font-bold text-[#A40C1A] font-display tracking-tight">Gallery</h1>
          <p className="text-sm text-gray-500 font-medium">Immersive Collection</p>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>

        {/* Left Split (50%) - Editorial Description */}
        <div className="w-1/2 h-full relative bg-white flex flex-col justify-center items-center px-12 lg:px-24">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A40C1A] to-transparent opacity-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-6xl lg:text-8xl font-bold text-[#A40C1A] mb-6 leading-[0.9] tracking-tighter font-display opacity-10 select-none absolute -top-24 -left-12">
              PHOTOS
            </h2>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#A40C1A] mb-8 leading-tight font-display">
              Capturing<br />The Spirit
            </h2>
            <div className="w-20 h-1 bg-[#1A4880] mb-8" />
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-ui font-light">
              Explore the moments that define our journey. From sparky workshops to intensive bootcamps, every snapshot tells a story of innovation, resilience, and growth at VentureNest.
            </p>

            <div className="mt-12 flex gap-4 text-sm text-gray-400 font-mono">
              <span>// SCROLL TO ZOOM</span>
              <span>// DRAG TO ROTATE</span>
              <span>// CLICK TO EXPAND</span>
            </div>
          </motion.div>
        </div>

        {/* Right Split (50%) - Dome Gallery */}
        <div style={{ width: '50%', height: '100%' }}>
          <DomeGallery images={displayImages} onImageClick={handleImageClick} />
        </div>

      </div>

      {/* Premium Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ModalContent
            selectedImage={selectedImage}
            closePopup={closePopup}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Extracted Modal Component to handle internal state better
const ModalContent = ({ selectedImage, closePopup }) => {
  const [scale, setScale] = useState(1);

  // Reset zoom when image changes
  useEffect(() => {
    setScale(1);
  }, [selectedImage]);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 pt-24" // Added pt-24 to lower it
      onClick={closePopup}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={closePopup}
        className="absolute top-6 right-6 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50 backdrop-blur-md border border-white/10 group"
      >
        <Close className="group-hover:rotate-90 transition-transform duration-300" />
      </motion.button>

      {/* Content Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Area */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-[#0a0a0a]">
          <motion.img
            src={selectedImage.imageUrl}
            alt={selectedImage.photoName}
            className="max-h-full max-w-full object-contain"
            animate={{ scale: scale }}
            drag={scale > 1}
            dragConstraints={{ left: -scale * 200, right: scale * 200, top: -scale * 200, bottom: scale * 200 }}
            dragElastic={0.1}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ cursor: scale > 1 ? 'grab' : 'default' }}
          />

          {/* Floating Zoom Controls */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto hover:opacity-100 z-50">
            <button onClick={handleZoomOut} className="text-white hover:text-[#A40C1A] disabled:opacity-50" disabled={scale <= 1}>
              <ZoomOut />
            </button>
            <span className="text-white font-mono text-sm min-w-[3rem] text-center">{Math.round(scale * 100)}%</span>
            <button onClick={handleZoomIn} className="text-white hover:text-[#A40C1A] disabled:opacity-50" disabled={scale >= 4}>
              <ZoomIn />
            </button>
            <div className="w-px h-4 bg-white/20 mx-2" />
            <button onClick={handleReset} className="text-white hover:text-[#A40C1A]" title="Reset">
              <RestartAlt />
            </button>
          </div>

          {/* Metadata Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-24 text-white pointer-events-none z-40">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              delay={0.2}
              className="text-3xl font-bold font-display tracking-tight mb-2"
            >
              {selectedImage.photoName || "Untitled Capture"}
            </motion.h3>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-400 uppercase tracking-widest font-mono">
                {scale > 1 ? "Drag to Pan" : "VentureNest Gallery"}
              </span>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
