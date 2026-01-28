// 'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './patent.css';
import MainPage from '../Components/Mainpage/Mainpage';

const Page = () => {
  const [patents, setPatents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  useEffect(() => {
    const fetchPatents = async () => {
      try {
        const response = await axios.get('https://venture-nest-backend.onrender.com/getpatent');
        setPatents(response.data);
      } catch (error) {
        console.error('Error fetching patents:', error);
      }
    };

    fetchPatents();
  }, []);

  const totalPages = Math.ceil(patents.length / entriesPerPage);
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, patents.length);
  const currentPatents = patents.slice(startEntry - 1, endEntry);

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

  return (
    <div>
      <MainPage headingText='Patent Filed' />
        <div className="patent-information-para">
        <div className="material-1 material" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
  <h1 className="materials-heading" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
    Patents Filed at CGC University's Incubator Center
  </h1>
  <p className="material-para" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
    Innovation is at the heart of CGC University’s academic and entrepreneurial journey. Through our Incubator Center, we empower aspiring innovators, researchers, and entrepreneurs to transform their groundbreaking ideas into intellectual property that drives societal and industrial advancement.
    <br /><br />
    Over the years, our students, faculty, and startup teams have filed numerous patents that reflect the spirit of innovation and creativity nurtured at CGC University. These patents showcase diverse fields, from cutting-edge technology to sustainable solutions, contributing to a smarter, more sustainable world.
  </p>
</div>

<div className="material-2 material" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
  <h1 className="materials-heading" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
    Our Commitment to Innovation
  </h1>
  <p className="material-para" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
    The Incubator Center at CGC University is dedicated to fostering a culture of invention and problem-solving. With state-of-the-art resources, expert mentorship, and collaborative environments, we aim to bridge the gap between academia and industry. Filing patents is a testament to our commitment to recognizing and protecting the intellectual assets of our innovators.
  </p>
</div>

<div className="material-3 material" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
  <h1 className="materials-heading" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
    Why Patents Matter
  </h1>
  <p className="material-para" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
    Patents safeguard ideas, encourage research, and promote progress. At CGC University, we understand the importance of intellectual property and ensure our innovators receive the necessary guidance to secure their creations. These patents not only add value to their professional journeys but also contribute to the college's legacy of excellence.
  </p>
</div>

<div className="material-4 material" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
  <h1 className="materials-heading" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="400">
    Explore Our Achievements
  </h1>
  <p className="material-para" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
    Our patents reflect the versatility and brilliance of CGC University's community. From AI-driven applications to environmentally sustainable technologies, every patent is a step toward building a better future.
    <br /><br />
    Take a look at the incredible contributions from our incubator center that make us a hub of innovation and creativity.
  </p>
</div>

        </div>
        <div className="patent-main-bg-container">
  {/* Pagination controls */}
  <div className="pagination-controls">
    <span className="entries-info">
      Showing {startEntry} to {endEntry} of {patents.length} entries
    </span>
    <select
      value={entriesPerPage}
      onChange={handleEntriesChange}
      className="entries-dropdown"
    >
      <option value={5}>5 per page</option>
      <option value={10}>10 per page</option>
      <option value={20}>20 per page</option>
    </select>
  </div>

  {/* Table Container */}
  <div className="table-wrapper">
    <table className="table-main-body">
      <thead>
        <tr>
          <th data-aos="fade-down">Sr. No</th>
          <th data-aos="fade-down">Title of the Patent</th>
          <th data-aos="fade-down">Inventor</th>
          <th data-aos="fade-down">Application No</th>
          <th data-aos="fade-down">Year of Filing</th>
        </tr>
      </thead>
      <tbody>
        {currentPatents.length > 0 ? (
          currentPatents.map((patent, index) => (
            <tr key={patent._id} data-aos="zoom-in" data-aos-delay={index * 100}>
              <td>{startEntry + index}</td>
              <td>{patent.PatentTitle}</td>
              <td>{patent.Inventor}</td>
              <td>{patent.ApplicationNo}</td>
              <td>{patent.PatentYear}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="no-data">No patents found.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Pagination Controls */}
  <div className="pagination-buttons">
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
      Previous
    </button>
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
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
</div>

    </div>
  );
};

export default Page;
