// 'use client'
import React, { useState  } from 'react';
import MainPage from '../Components/Mainpage/Mainpage';
import './joinus.css'; // Import your CSS file
import Slider from 'react-slick';

const AnimatedForms = () => {
  // State to keep track of the active form
  const [activeForm, setActiveForm] = useState('login');

  // Function to handle switching forms
  const handleSwitch = (form) => {
    setActiveForm(form); // Set the active form
  };

  return (

    <div>
      <MainPage headingText="JOIN US" />
      
      <section className="forms-section" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
  {/* <h1 className="section-title">Join Us</h1> */}
  <div className="forms">
    {/* Login Form */}
    <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
      <button
        type="button"
        className="switcher switcher-login"
        onClick={() => handleSwitch('login')}
        data-aos="zoom-in" 
        data-aos-duration="800"
        data-aos-delay="500"
        >
        E-cell Member
        <span className="underline"></span>
      </button>
      <form className="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800">
            <label htmlFor="login-name">NAME:</label>
            <input id="login-name" type="email" required />
          </div>

          <div className="set-1 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <label htmlFor="login-dob">DOB:</label>
              <input id="login-dob" type="date" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <label htmlFor="login-bloodGrp">Blood Group:</label>
              <input id="login-bloodGrp" type="text" required />
            </div>
          </div>

          <div className="set-2 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <label htmlFor="login-C-roll">College Roll.No:</label>
              <input id="login-C-roll" type="text" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <label htmlFor="login-U-roll">University Roll.No:</label>
              <input id="login-U-roll" type="text" required />
            </div>
          </div>

          <div className="set-3 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              <label htmlFor="login-s-y">Semester/Year:</label>
              <input id="login-s-y" type="text" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <label htmlFor="login-U-roll">Branch</label>
              <input id="login-U-roll" type="email" required />
            </div>
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
            <label htmlFor="login-U-roll">College Name:</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
            <label htmlFor="login-U-roll">Department:</label>
            <input id="login-U-roll" type="email" required />
          </div>

          <div className="set-4 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
              <label htmlFor="login-U-roll">Contact No:</label>
              <input id="login-U-roll" type="email" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
              <label htmlFor="login-U-roll">Secondary Contact No:</label>
              <input id="login-U-roll" type="email" required />
            </div>
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1100">
            <label htmlFor="login-U-roll">Professional E-Mail:</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1200">
            <label htmlFor="login-U-roll">Adhaar Card No. :</label>
            <input id="login-U-roll" type="email" required />
          </div>

          <div className="set-5 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1300">
              <label htmlFor="login-U-roll">Father's Name:</label>
              <input id="login-U-roll" type="email" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1400">
              <label htmlFor="login-U-roll">Father's Contact:</label>
              <input id="login-U-roll" type="email" required />
            </div>
          </div>

          <div className="set-6 sets">
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1500">
              <label htmlFor="login-U-roll">Mother's Name:</label>
              <input id="login-U-roll" type="email" required />
            </div>
            <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1600">
              <label htmlFor="login-U-roll">Mother's Contact:</label>
              <input id="login-U-roll" type="email" required />
            </div>
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1700">
            <label htmlFor="login-U-roll">Current Residence:(Hosteller/ Day Scholar)</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1800">
            <label htmlFor="login-U-roll">Temporary Address:</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1900">
            <label htmlFor="login-U-roll">Permanent Address:</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="2000">
            <label htmlFor="login-U-roll">LinkedIn:(url)</label>
            <input id="login-U-roll" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="2100">
            <label htmlFor="login-U-roll">Permanent Address</label>
            <input id="login-U-roll" type="email" required />
          </div>

        </fieldset>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>

    {/* Sign Up Form */}
    <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
      <button
        type="button"
        className="switcher switcher-signup"
        onClick={() => handleSwitch('signup')}
        data-aos="zoom-in" 
        data-aos-duration="800"
        data-aos-delay="500"
        >
        Start-up Incubate
        <span className="underline"></span>
      </button>
      <form className="form form-signup">
        <fieldset>
          <legend>
            Please, enter your email, password, and password confirmation for sign up.
          </legend>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800">
            <label htmlFor="signup-email">E-mail</label>
            <input id="signup-email" type="email" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" required />
          </div>
          <div className="input-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <label htmlFor="signup-password-confirm">Confirm password</label>
            <input id="signup-password-confirm" type="password" required />
          </div>
        </fieldset>
        <button type="submit" className="btn-signup">Continue</button>
      </form>
    </div>
  </div>
</section>

{/* <Slider/> */}
    </div>
  );
};

export default AnimatedForms;
