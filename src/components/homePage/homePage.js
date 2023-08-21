import React from 'react';
import './homePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="left-panel">
        <img
          src="/Profile_Pic_Linkedin.jpg"
          alt="Headshot"
          className="main-image"
        />
      </div>
      <div className="right-panel">
        <img
          src="WinterParkMainStreet.jpg"
          alt="Background"
          className="background-image"
        />
        <div className="text-overlay">
          <h1>James "Jamie" Peterson</h1>
          <div style={{fontFamily:"cursive"}}>
            <p>From the mountains to the great lakes</p>
            <p>Here is my journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;