import React from "react";
import "./background.css";

const Background = () => {

    const intro = () => {
        return (
            <div className="introContainer">
                <p>test</p>
            </div>
        );
    }

    const redRocks = () => {
        return (
            <div className="redRocksContainer">
                <p>test</p>
            </div>
        )
    }

    const UWM = () => {
        return (
            <div className="UWMContainer">
                <p>test</p>
            </div>
        )
    }

    return (
        <div className="backgroundContainer">
            {intro()}
            {redRocks()}
            {UWM()}
        </div>
    );
};

export default Background;