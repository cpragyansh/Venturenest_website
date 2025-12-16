import React from 'react';

import './mainpage.css'
const MainPage = ({ headingText }) => {
    return (
        <>
        {/* <Navbar/> */}
        <div className="relative h-[150px] z-10 mainpage-main-box" 
        // data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200"
        > 
            {/* Adjust the height as needed */}
            <div className="flex justify-center items-center absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className=" font-semibold text-center main-head-mainpage" 
                // data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300"
                >
                    {headingText}
                </h1>
            </div>
        </div>
    </>
    
    );
}

export default MainPage;
