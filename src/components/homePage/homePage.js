import {React, useState, useEffect} from 'react';
import './homePage.css';
import Button from '@mui/material/Button';
import LanguageHive from '../languageHive/languageHive';
import Background from '../background/background';

const HomePage = () => {
  const [displayComponent, setDisplayComponent] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(null);

  // TODO move this logic to a new file that contains the different parts for homepage to call
  const initialize = () => { 
      let display;

      if (currentComponent) {
          display = currentComponent;
      } else {
          display = (
            <div>
              <div className="homepage-container">
                <div className="left-panel">
                  <img
                    src="/pictures/Profile_Pic_Linkedin.jpg"
                    alt="Headshot"
                    className="main-image"
                  />
                </div>
                <div className="right-panel">
                  <img
                    src="/pictures/WinterParkMainStreet.jpg"
                    alt="Background"
                    className="background-image"
                  />
                  <div className="text-overlay">
                    <h1>James "Jamie" Peterson</h1>
                    <div style={{fontFamily:"cursive"}}>
                      <p>From the rocky mountains to the great lakes</p>
                      <p>Here is my journey!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tableOfContentsContainer">
                <img
                    src="/pictures/WinterParkResort.jpeg"
                    alt="Mountain range"
                    className="backgroundImage"
                />
                <h1>My Story</h1>
                <p>
                    I grew up in a small mountain town in Colorado. After graduation I took a couple years off to work and gain an appreciation
                    for the value of a college education. After 3 years of working in customer service I decided to go back to school.

                </p>
                <h1>Table of Contents</h1>
                <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <ul>
                        <Button onClick={() => handlePageChange("background")}>Background</Button>
                        <Button onClick={() => handlePageChange("experience")}>Experience</Button>
                        <Button onClick={() => handlePageChange("projects")}>Projects</Button>
                        <Button onClick={() => handlePageChange("socials")}>Socials</Button>
                        <Button onClick={() => handlePageChange("contact me")}>Contact Me</Button>
                    </ul>
                </div>
            </div>
              <div className="languageHive-container">
                <LanguageHive />
              </div>
            </div>
          )
      }
      setDisplayComponent(display);
      setCurrentComponent(display);
  }

  useEffect(() => { 
      initialize();
  }, []);

  const handlePageChange = (page) => {
      if (page === "background") {
          setDisplayComponent(<Background />);
          setCurrentComponent(<Background />);
      }

      if (page === "experience") {
          // TODO
          // setDisplayComponent(<Experience />);
          // setCurrentComponent(<Experience />);
      }

      if (page === "projects") {
          // TODO
          // setDisplayComponent(<Projects />);
          // setCurrentComponent(<Projects />);
      }

      if (page === "socials") {
          // TODO
          // setDisplayComponent(<Socials />);
          // setCurrentComponent(<Socials />);
      }

      if (page === "contact me") {
          // TODO
          // setDisplayComponent(<ContactMe />);
          // setCurrentComponent(<ContactMe />);
      }
  }

  return (
    <>
      {displayComponent}
    </>
  );
};

export default HomePage;