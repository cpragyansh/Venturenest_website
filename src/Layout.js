import React from 'react';
// import { Helmet } from 'react-helmet';
import Navbar from './app/Components/Navbar/Navbar';
import Footer from './app/Components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Connect from './components/connect/connect';

const Layout = ({ children }) => {
  return (
    <div>
      
      
      < Navbar />
      {children}
      {/* <Connect /> */}
      <Footer/>
    </div>
  );
};

export default Layout;
