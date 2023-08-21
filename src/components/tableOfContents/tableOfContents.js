import React from 'react';

const TableOfContents = () => {
    return (
        <div className="tableOfContentsContainer">
            <h1>Intro</h1>
            <p>
                blah blah blah 
                blah blah blah 
                blah blah blah 
                blah blah blah 
                blah blah blah 
            </p>
            <h1>Table of Contents</h1>
            <div style={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <ul style={{display:"inline-block"}}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About Me</a></li>
                </ul>
                <ul style={{display:"inline-block"}}>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
                <ul style={{display:"inline-block"}}>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact-me">Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default TableOfContents;