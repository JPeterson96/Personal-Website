import React from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

const ContactMe = () => {
  const handleEmailButtonClick = () => {
    const emailAddress = 'JamesPetersonTech@gmail.com';
    const emailLink = `mailto:${emailAddress}`;
    window.open(emailLink, '_blank');
  }

  return (
    <div className="contactContainer">
      <div className="contactCard">
        <h1>Keep up with the rest of my journey!</h1>
        <div className="contactButtons">
          <LinkedInIcon 
            fontSize='large' 
            style={{cursor:"pointer", marginLeft:"2%", marginRight:".7%"}} 
            onClick={() => window.open("https://www.linkedin.com/in/james-peterson-35b8251a2/", "_blank")}
          />
            <Button className="buttonStyling" onClick={() => window.open("https://www.linkedin.com/in/james-peterson-35b8251a2/", "_blank")}>LinkedIn</Button>
          <GitHubIcon 
            fontSize='large' 
            style={{cursor:"pointer", marginLeft:"2%", marginRight:".5%"}} 
            onClick={() => window.open("https://github.com/JPeterson96", "_blank")}
          />
            <Button className="buttonStyling" onClick={() => window.open("https://github.com/JPeterson96", "_blank")}>Github</Button>
          <EmailIcon 
            fontSize='large' 
            style={{cursor:"pointer", marginLeft:"2%", marginRight:".1%"}} 
            onClick={() => handleEmailButtonClick()}
          />
            <Button className="buttonStyling" onClick={() => handleEmailButtonClick()}>Email</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
