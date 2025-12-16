import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <div className="footer-main-container">
                <div className="footer-section-column-1">
                    {/* <div className="cgc-logo-footer-section-column-1"> */}
                        <img src="/assets/Footer-logo-parts/cgc-logo-updated.png" alt="" className="footer-logo-cgc-img" />
                    {/* </div> */}
                   
                    {/* <div className="ecell-logo-footer-section-column-1"> */}
                        <img src="/assets/Footer-logo-parts/footer-logos-os-gauge.png" alt="" className="footer-logo-qsgauge-img" />
                    {/* </div> */}
                    {/* <div className="ecell-logo-footer-section-column-1"> */}
                        <img src="/assets/Footer-logo-parts/nirf-updated.png" alt="" className="footer-logo-nirf-img" />
                    {/* </div> */}
                    {/* <div className="ecell-logo-footer-section-column-1"> */}
                        <img src="/assets/Footer-logo-parts/naac-updated.png" alt="" className="footer-logo-ecell-img" />
                    {/* </div> */}
                    {/* <div className="ecell-logo-footer-section-column-1"> */}
                        {/* <img src="/assets/venture-nest-bg-less-white.png" alt="" className="footer-logo-ecell-img venturenest-mian-logo" /> */}
                        <img src="/assets/cgc_venturenest_logo_n1-modified.png" alt="" className="footer-logo-ecell-img venturenest-mian-logo" />
                    {/* </div> */}
                </div>
                <div className="footer-new-logos-part-seperation-experiment">

                <div className="footer-section-usefull-links">
                    <h1 className='usefull-links-footer-section-heading'>USEFUL LINKS</h1>
                    <div className="footer-usefullinks-para-main-div">
                        {/* <div className="usefull-links-para">HOME</div> */}
                        {/* <div className="usefull-links-para">ABOUT VENTURE NEST</div> */}
                        <div className="usefull-links-para"><li><a href="/IncubateWithUs" className="navbar-links-joinus-btn-text" >
              Join Us
            </a></li></div>
                        {/* <div className="usefull-links-para">EVENTS</div> */}
                        {/* <div className="usefull-links-para">IMPACT</div> */}
                        <div className="usefull-links-para"><li><a href="/Events" >Events</a></li></div>
                        <div className="usefull-links-para"><li><a href="/Programs" >Programs</a></li></div>
                        <div className="usefull-links-para"> <li><a href="/contact" >Contact</a></li></div>
                        <div className="usefull-links-para"> <li><a href="/vision" >Mission & Vision</a></li></div>
                        <div className="usefull-links-para"><li><a href="/aboutUs" >About Us</a></li></div>
                        <div className="usefull-links-para">    <li><a href="/Startups"     >Portfolio</a></li></div>
                        <div className="usefull-links-para"><li><a href="/Gallery/Photos" >Photo</a></li></div>
                        <div className="usefull-links-para"><li><a href="/Gallery/Videos" >Videos</a></li></div>
                        {/* <div className="usefull-links-para">SUCCESS STORIES</div> */}
                    </div>
                </div>
                <div className="section-1-footer">
                    <h1 className="footer-section-contact-heading">CONTACT</h1>
                    <div className="footer-section-contact-text-part">
                        <h1 className='section-1-footer-name'>CGC University</h1>
                        <div className="cgc-address-para-footer-section">
                            <p className='footer-main-para-details-inner-direct-access'>C/o CES, Room No. 7, Block 3, CGC University, Majatri, S.A.S. Nagar (Mohali),</p>
                            <p className='footer-main-para-details-inner-direct-access'>Rupnagar-140307, Punjab</p>
                        </div>
                        <div className="section-1-footer-sub-part">
                            <h2>For general Queries</h2>
                            <p>
  E-mail: <a href="mailto:venturenest@cgcuniversity.in">venturenest@cgcuniversity.in</a>
</p>

                        </div>
                    </div>
                </div>
                <div className="section-2-footer">
                    <h1 className='footer-section-connect-heading'>CONNECT</h1>
                    <p className="footer-section-connecting-social-media-para">Get Connected With Us On Social Networks:</p>
                    <div className="social-media-icons-footer-section">


                        <a href="https://www.facebook.com/share/1C8yb6NvuN/?mibextid=wwXIfr 
"


                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <img src="/assets/social-media/facebook-hd.png" alt="" className="social-media-icons-img social-media-hover" href="" />
                            {/* <img src="/assets/social-media/twitter.png" alt="" className="social-media-icons-img social-media-hover" /> */}

                        </a>
                        <a
                            href="https://www.instagram.com/venturenest_cgcj_tbi?igsh=YThydHJ3dDNoc3Vq"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/social-media/instagram-hd.png"
                                alt="Instagram"
                                className="social-media-icons-img social-media-hover"
                            />
                        </a>

                        <a href="https://www.youtube.com/@VentureNestCGC UniversityTBI" target="_blank"
                            rel="noopener noreferrer">
                            <img src="/assets/social-media/youtube-hd.png" alt="" className="social-media-icons-img social-media-hover" />

                        </a>

                        <a href="https://www.linkedin.com/company/venturenest-cgc- University-tbi-association/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <img src="/assets/social-media/linkdin-hd.png" alt="" className="social-media-icons-img social-media-hover" />


                        </a>
                    </div>
                </div>
                </div>
            </div>

            <div className="footer-copy-right-section">
                <p className='copyright-footer-section-para'>©2025 Copyright Venture Nest</p>
            </div>
        </div>
    );
};

export default Footer;
