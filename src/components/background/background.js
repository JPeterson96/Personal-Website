import React from "react";
import "./background.css";

const Background = () => {

    const intro = () => {
        return (
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
                </div>
            </div>
        );
    }

    const redRocks = () => {
        return (
            <div className="redRocksContainer">
                <div className="leftPanel">
                    <img
                        src="/pictures/rrcc.jpg"
                        alt="Red Rocks Community College"
                        className="redRocksImage"
                    />
                </div>
                <div className="rightPanel">
                    <div className="textOverlay">
                        <h1>Red Rocks Community College</h1>
                        <p>
                            My first step on my professional journey was to attend Red Rocks Community College. Here I was able to knock
                            out a good chunk of my general creadits while buildding my foundation in computer science. I was able to 
                            learn the basics of programming with Python, Java, and C++. Even though my skills where still basic the 
                            passion was there. Through my time at Red Rocks I was able to secure a scholorship to attend the University
                            of Wisconsin - Milwaukee!
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const UWM = () => {
        return (
            <div className="UWMContainer">
                <div className="leftPanel">
                    <img
                        src="/pictures/uwm_campus.jpg"
                        alt="University of Wisconsin - Milwaukee"
                        className="uwmImage"
                    />
                </div>
                <div className="rightPanel">
                    <div className="textOverlay">
                        <h1>University of Wisconsin - Milwaukee</h1>
                        <p>
                            University of Wisconsin - Milwaukee was the place where I was really put to the test and taught how to
                            code efficiently and effectively. I was able to learn the basics and apply them to creative and interesting
                            problems. At UWM the courses mainly use Java until youre past data structures and algorithms. After that you
                            are shown a variety of different languaes such as: C, C++, Python, HTML, CSS mySQL, and many more. Towards the
                            end of my time at UWM I was able to secure an internship with Schneider National where I was able to show off
                            what I have learned and apply it to real world problems.
                        </p>
                    </div>
                </div>
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