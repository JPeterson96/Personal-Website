import React from 'react';
import './experience.css';

function Experience() {
  const zoom = 100;

  return (
    <div className="experienceCcontainer">
      <div className="pdfDocument">
        <iframe
          title="PDF Resume"
          src="./Resume.pdf"
          width={`${zoom}%`}
          height={`${zoom}%`}
        ></iframe>
      </div>
    </div>
  );
}

export default Experience;