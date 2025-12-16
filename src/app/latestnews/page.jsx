// // "use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainPage from '../Components/Mainpage/Mainpage';
import LatestNews from '../Components/LatestNews/LatestNews';

export default function Page() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const newsPerPage = 3; // Number of news items per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch the news data from the API
        const response = await axios.get('https://venturenest.onrender.com/latestnews');
        const allNews = response.data;

        // Calculate the indices for the current page
        const startIndex = (currentPage - 1) * newsPerPage;
        const endIndex = startIndex + newsPerPage;
        
        // Extract news for the current page
        const newsToShow = allNews.slice(startIndex, endIndex);
        
        // Set the news in state
        setNews(newsToShow);
        
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [currentPage]); // Add currentPage to the dependency array

  // Handler for "Next" button
  const handleNext = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Handler for "Previous" button
  const handlePrevious = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <MainPage headingText="Latest News" />
      
      {/* Map over the current news items and render them */}
      <div className='flex flex-wrap justify-center'>
        {news.map((newsItem) => (
          <LatestNews 
            key={newsItem._id}
            NewsTitle={newsItem.Title}
            NewsImg={newsItem.imageUrl} // Using imageUrl directly from Cloudinary
            NewsContent={newsItem.content}
          />
        ))}
      </div>

      <div className="flex justify-between mx-28 mt-5">
        <button 
          className={`bg-[#a00534] rounded-md p-2 text-white font-semibold hover:bg-[#d7295d] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
          onClick={handlePrevious} 
          disabled={currentPage === 1}
        >
          Pre
        </button>
        <button 
          className={`bg-[#a00534] rounded-md p-2 text-white font-semibold hover:bg-[#d7295d]`} 
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
