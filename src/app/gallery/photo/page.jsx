"use client";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import DomeGallery from "../../Components/ui/DomeGallery";
import FlowingMenu from "../../Components/ui/FlowingMenu";
import Masonry from "../../Components/ui/Masonry";
import { Close, ZoomIn, ZoomOut, RestartAlt, ViewInAr, GridView, ArrowBack } from "@mui/icons-material";

export default function Photos() {
  const [Path, SetPath] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('globe'); // Default changed from 'list' to 'globe'
  const [selectedCategory, setSelectedCategory] = useState(null); // For Masonry view

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/photos");
        let photos = response.data;
        if (photos.length > 0) {
          const originalPhotos = [...photos];
          let domePhotos = [...photos];
          while (domePhotos.length < 150) {
            domePhotos = [...domePhotos, ...originalPhotos];
          }
          domePhotos = domePhotos.slice(0, 150);
          SetPath(domePhotos);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchData();
  }, []);

  const [rawPhotos, setRawPhotos] = useState([]);
  useEffect(() => {
    const fetchRawData = async () => {
      try {
        const response = await axios.get("https://venturenest.onrender.com/photos");
        setRawPhotos(response.data);
      } catch (error) {
        console.error("Error fetching raw photos", error);
      }
    }
    fetchRawData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const uniqueCategories = useMemo(() => {
    const map = new Map();
    rawPhotos.forEach(photo => {
      if (photo.photoName && !map.has(photo.photoName)) {
        map.set(photo.photoName, photo);
      }
    });
    return Array.from(map.values()).map((photo, index) => ({
      link: "#",
      text: photo.photoName,
      image: photo.imageUrl,
      id: photo._id || index
    }));
  }, [rawPhotos]);

  const masonryItems = useMemo(() => {
    if (!selectedCategory) return [];
    return rawPhotos
      .filter(p => p.photoName === selectedCategory)
      .map((p, i) => ({
        id: p._id || `${i}`,
        img: p.imageUrl,
        url: p.imageUrl,
        height: Math.floor(Math.random() * (600 - 250 + 1) + 250)
      }));
  }, [selectedCategory, rawPhotos]);

  const skeletons = Array(50).fill({ skeleton: true });
  const displayImages = Path.length > 0 ? Path : skeletons;

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: viewMode === 'list' ? '#000' : '#fff', position: 'relative', transition: 'background 0.5s ease' }}>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-20 p-4 flex justify-between items-center pointer-events-none">

        {/* Title */}
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 pointer-events-auto">
          <h1 className={`text-xl font-bold ${viewMode === 'list' ? 'text-white' : 'text-[#A40C1A]'} font-display tracking-tight transition-colors duration-500`}>Gallery</h1>
          <p className={`text-xs ${viewMode === 'list' ? 'text-gray-400' : 'text-gray-500'} font-medium transition-colors duration-500`}>{viewMode === 'globe' ? 'Immersive' : selectedCategory ? selectedCategory : 'Catalog'}</p>
        </div>

        {/* View Switcher */}
        <div className="flex gap-2 pointer-events-auto bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
          <button
            onClick={() => {
              setViewMode('globe'); 
              setSelectedCategory(null); 
            }}
            className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 ${viewMode === 'globe' ? 'bg-[#A40C1A] text-white shadow-lg' : 'text-gray-500 hover:bg-white/20 hover:text-white'}`}
          >
            <ViewInAr fontSize="small" />
            <span className={`text-[10px] font-bold leading-none ${viewMode === 'globe' ? 'block' : 'hidden'} md:block`}>IMMERSIVE</span>
          </button>
          <button
            onClick={() => {
              setViewMode('list');
            }}
            className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 ${viewMode === 'list' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:bg-black/20 hover:text-black'}`}
          >
            <GridView fontSize="small" />
            <span className={`text-[10px] font-bold leading-none ${viewMode === 'list' ? 'block' : 'hidden'} md:block`}>CATALOG</span>
          </button>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex-1 overflow-hidden">

        {/* VIEW 1: GLOBE/DOME */}
        {viewMode === 'globe' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex"
          >
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
          </motion.div>
        )}


        {/* VIEW 2: LIST (Flowing Menu + Accordion Masonry) */}
        {viewMode === 'list' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative pt-20"
          >
            {/* Accordion Menu */}
            <div className="w-full h-full text-white">
              <FlowingMenu
                items={uniqueCategories.map(cat => ({
                  ...cat,
                  children: (
                    <div className="w-full h-[600px] overflow-y-auto scrollbar-hide p-4 md:p-12"> {/* Fixed height container for Masonry inside accordion */}
                      <Masonry
                        items={rawPhotos
                          .filter(p => p.photoName === cat.text)
                          .map((p, i) => ({
                            id: p._id || `${i}`,
                            img: p.imageUrl,
                            url: p.imageUrl,
                            height: Math.floor(Math.random() * (600 - 300 + 1) + 300), // Taller images
                            photoName: p.photoName // Pass metadata
                          }))
                        }
                        onImageClick={(item) => handleImageClick({ imageUrl: item.img, photoName: item.photoName })}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                      />
                    </div>
                  )
                }))}
                expandedId={selectedCategory}
                onMenuItemClick={(id) => setSelectedCategory(id === selectedCategory ? null : id)}
              />
            </div>
          </motion.div>
        )}

      </div>

      {/* Premium Image Modal (Global) */}
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
