import React, { useState } from 'react';
import './experience.css';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

function Experience() {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 10);
    }
  };

  return (
    <div className="experienceCcontainer">
      <div className="experienceHeader">
        <ZoomOutIcon className='iconStyling' fontSize='large' variant="contained" style={{marginRight:"1%"}} onClick={() => handleZoomOut()}/>
        <ZoomInIcon className='iconStyling' fontSize='large' variant="contained" style={{marginLeft:"1%"}} onClick={() => handleZoomIn()}/>
      </div>
      <div className="pdfDocument">
        <iframe
          title="PDF Resume"
          src="/Résumé.pdf"
          width={`${zoom}%`}
          height={`${zoom}%`}
        ></iframe>
      </div>
    </div>
  );
}

export default Experience;