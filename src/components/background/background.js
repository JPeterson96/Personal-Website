import React from "react";
import "./background.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Background = () => {
    return (
        <div>
            <div className="backgroundHeader">
                <ArrowBackIosNewIcon />
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <h1>Sample</h1>
                </div>
            </div>
            <div className="backgroundContainer">
                <p>sample body</p>
            </div>
        </div>
    );
};

export default Background;