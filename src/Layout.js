import React from 'react';
// import { Helmet } from 'react-helmet';
// import Navbar from './app/Components/Navbar/Navbar';
import Footer from './app/Components/Footer/Footer';
import ClickSpark from './app/Components/ui/ClickSpark';
// import Sub_Navbar from './app/Components/Sub_navbar/Subnavbar';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Connect from './components/connect/connect';

const Layout = ({ children }) => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div>
        {/* <Sub_Navbar/> */}
        {/* < Navbar /> */}
        {children}
        {/* <Connect /> */}
        <Footer />
      </div>
    </ClickSpark>
  );
};

export default Layout;
