import React from "react";
import "./background.css";

const Background = () => {

    const intro = () => {
        return (
            // <div className="introContainer">
            //     <img
            //         src="/pictures/winterPark.jpg"
            //         alt="Winter Park, CO"
            //         className="winterParkImage"
            //     />
            // </div>
            <div className="introContainer">
                <div className="introContainer">
                    <img
                        src="/pictures/winterPark.jpg"
                        alt="Winter Park, CO"
                        className="winterParkImage"
                    />
                    <div className="introPanel">
                        <div className="introTextOverlay">
                            <h1>My Journey!</h1>
                            <div>
                                <p>
                                Growing up in the mountains I have always had a sense for adventure and a love for the unknown. 
                                This meant that after high school I had no idea what I wanted to do. After working three years 
                                in customer service I really got an appreciation for an education and decided to take the first 
                                steps towards my future. 
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="introLeftPanel">
                        <img
                            src="/pictures/WinterParkMainStreet.jpg"
                            alt="Background"
                            className="background-image"
                        />
                    </div> */}
                </div>
            </div>
        );
    }

    const redRocks = () => {
        return (
            <div className="redRocksContainer">
                <div className="redRocksLeftPanel">
                    <img
                        src="/pictures/rrcc.jpg"
                        alt="Red Rocks Community College"
                        className="redRocksImage"
                    />
                </div>
                <div className="redRocksRightPanel">
                    <div className="redRocksTextOverlay">
                        <h1>Red Rocks Community College</h1>
                    </div>
                </div>
            </div>
        )
    }

    const UWM = () => {
        return (
            <div className="UWMContainer">
                <img
                    src="/pictures/uwm_campus.jpg"
                    alt="University of Wisconsin - Milwaukee"
                    className="uwmImage"
                />
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