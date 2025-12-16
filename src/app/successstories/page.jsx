// 'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainPage from '../Components/Mainpage/Mainpage';
import LatestNews from '../Components/LatestNews/LatestNews';

export default function Page() {
  const [successStories, setSuccessStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await axios.get('https://venturenest.onrender.com/getsuccess');
        setSuccessStories(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching success stories:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSuccessStories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate the index of the first and last item to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = successStories.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage * itemsPerPage < successStories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) { 
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <MainPage headingText="Success Stories" />
      <div className="main-success-story flex flex-wrap justify-center items-center">
      {currentItems.length > 0 ? (
        currentItems.map((story) => (
          <LatestNews
            key={story._id}
            NewsTitle={story.StartupName}
            NewsImg={story.FounderImg} // Adjust path if necessary
            NewsContent={story.StartupAbout}
          />
        ))
      ) : (
        <p>No success stories found.</p>
      )}
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
          className={`bg-[#a00534] rounded-md p-2 text-white font-semibold hover:bg-[#d7295d] ${currentPage * itemsPerPage >= successStories.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
          onClick={handleNext}
          disabled={currentPage * itemsPerPage >= successStories.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
