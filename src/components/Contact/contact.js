import React from 'react';

const Contact = () => {
  const emailAddress = 'JamesPetersonTech@gmail.com';

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
    <div className="contactContainer">
      <h1>Contact Me</h1>
      <p>
        I grew up in the mountains and now reside near the Great Lakes. Feel free to reach out to me through any of these methods:
      </p>
      <div className="contactButtons">

        <button className="contact-button" onClick={handleEmailButtonClick}>
          Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
