import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-main-container">
                
                <div className="footer-top-header">
                    <h2 className="stay-connected-heading">Stay Connected</h2>
                    <h2 className="stay-connected-subheading">Stay Connected with Venture Nest</h2>
                </div>

                <div className="footer-content-grid">
                    
                    {/* Column 1: Brand Info & Apply Button */}
                    <div className="footer-column brand-column">
                        <img 
                            src="/assets/cgc_venturenest_logo_n1-modified.png" 
                            alt="Venture Nest Logo" 
                            className="footer-logo-main" 
                        />
                        <p className="brand-description">
                            Welcome to Venture Nest, the premier incubation center at CGC University. 
                            We are dedicated to fostering innovation and entrepreneurship, providing 
                            startups with the resources they need to scale and succeed.
                        </p>
                        
                        <a href="/IncubateWithUs" className="apply-today-btn">
                            APPLY TODAY <span>&#8594;</span>
                        </a>

                         {/* Social Icons moved here to fit the "Stay Connected" theme */}
                         <div className="footer-socials">
                            <a href="https://www.facebook.com/share/1C8yb6NvuN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/social-media/facebook-hd.png" alt="FB" className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/venturenest_cgcj_tbi?igsh=YThydHJ3dDNoc3Vq" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/social-media/instagram-hd.png" alt="IG" className="social-icon" />
                            </a>
                            <a href="https://www.youtube.com/@VentureNestCGC UniversityTBI" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/social-media/youtube-hd.png" alt="YT" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/company/venturenest-cgc- University-tbi-association/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/social-media/linkdin-hd.png" alt="IN" className="social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-column links-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links-list">
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/vision">Mission & Vision</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/Startups">Our Portfolio</a></li>
                            <li><a href="/Programs">Programs</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Explore (More Links) */}
                    <div className="footer-column links-column">
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-links-list">
                            <li><a href="/Events">Events</a></li>
                            <li><a href="/Gallery/Photos">Photo Gallery</a></li>
                            <li><a href="/Gallery/Videos">Video Gallery</a></li>
                            <li><a href="/IncubateWithUs">Incubation</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact / Address */}
                    <div className="footer-column contact-column">
                        <h3 className="footer-heading">Contact Offices</h3>
                        
                        <div className="contact-block">
                            <h4 className="contact-location">CGC University (Head Office):</h4>
                            <p>C/o CES, Room No. 7, Block 3,</p>
                            <p>CGC University, Majatri,</p>
                            <p>S.A.S. Nagar (Mohali),</p>
                            <p>Rupnagar-140307, Punjab</p>
                        </div>

                        <div className="contact-block">
                            <h4 className="contact-location">General Queries:</h4>
                            <p><a href="mailto:venturenest@cgcuniversity.in" className="email-link">venturenest@cgcuniversity.in</a></p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
                <p>© 2025 Copyright Venture Nest. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;