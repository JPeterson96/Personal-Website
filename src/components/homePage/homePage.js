import {React, useState, useEffect} from 'react';
import './homePage.css';
import Button from '@mui/material/Button';
import Background from '../background/background';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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
                    <div>
                      <p>From the rocky mountains to the great lakes</p>
                      <p>Here is my journey!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="languageHive-container">
                <LanguageHive />
              </div> */}
            </div>
          )
      }
      setDisplayComponent(display);
      setCurrentComponent(display);
  }

  useEffect(() => { 
      initialize();
  });

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

      if (page === "home") {
          setDisplayComponent(null);
          setCurrentComponent(null);
      }
  }

  const pageHeader = () => {
    return (
      <div className="headerContainer">
        <div className="headerHome">
          <HomeOutlinedIcon fontSize='large' onClick={() => handlePageChange("home")} style={{cursor: "pointer", marginTop:"1.5%"}} />
        </div>
        <div className="headerButtons">
          <Button sx={{fontSize:"large"}} style={{color:"white"}} onClick={() => handlePageChange("background")}>Background</Button>
          <Button sx={{fontSize:"large"}} style={{marginLeft:"2%", color:"white"}} onClick={() => handlePageChange("experience")}>Experience</Button>
          <Button sx={{fontSize:"large"}} style={{marginLeft:"2%", color:"white"}} onClick={() => handlePageChange("projects")}>Projects</Button>
          <Button sx={{fontSize:"large"}} style={{marginLeft:"2%", color:"white"}} onClick={() => handlePageChange("socials")}>Socials</Button>
          <Button sx={{fontSize:"large"}} style={{marginLeft:"2%", marginRight:"2%", color:"white"}} onClick={() => handlePageChange("contact me")}>Contact Me</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {pageHeader()}
      {displayComponent}
    </>
  );
};

export default HomePage;