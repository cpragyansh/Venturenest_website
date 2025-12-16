import React, { useState } from "react";
import './latest.css';

// Function to truncate text safely
const truncateText = (text = '', maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

export default function LatestNews({ NewsTitle, NewsImg, NewsContent }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  // Function to handle opening modal
  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  // Function to handle closing modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <>
      <div className="border">
        <div className="latest-newss">
          <div className="latest-news-main">
            <div className="latest-news latest-news-one">
              <div className="news-main-container-shadow-border">
                <div className="latest-news-img latest-news-img-one">
                  <img src={NewsImg} alt="" className="news-image-inline" />
                </div>
                <div className="latest-news-description-button">
                  <div className="head-latest-news head-latest-news-one">{NewsTitle}</div>
                  <div className="details-latest-news details-latest-news-one">
                    <p>{truncateText(NewsContent, 30)}</p>
                  </div>
                  <div className="latest-news-button latest-news-button-one">
                    <button onClick={() => openModal({
                      title: 'Photo 1',
                      image: 'assets/pulkesh.jpg',
                      description: 'Full description text goes here for the modal. This will be a longer description compared to the card description.',
                    })}>Know More!</button>
                  </div>
                </div>
              </div>
            </div>
         
            {/* Add other news cards similarly */}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? "modal-open" : ""}`}>
          <div className={`modal-content ${isModalOpen ? "modal-slide-up" : ""}`}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            {selectedNews && (
              <>
                <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
                <h2>{selectedNews.title}</h2>
                <p>{selectedNews.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
