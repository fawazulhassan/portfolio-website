import React from "react";
import './Projects.css';

 
 function Projects() {
return( 
    <div className="projects" id='projects'>
        <p className="pro">Projects</p>
    <div className='square'>
        <p className="portion1">
        <p className="smallsquare">
            <img 
                src="/row-1-column-1.png" 
                className="img" 
                alt="my first image" 
                onClick={() => window.open('/row-1-column-1.png', '_blank')}
            />
        </p>
        <p className="title">Portfolio website</p>
        <p className="description">Responsive website built with React.<br/>including CSS</p>
        </p>
        
        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub" onClick={() => window.open('https://github.com/fawazulhassan/portfolio-website', '_blank')}>Git Hub</button>
        
        </div>
        <div className="square">
        <p className="portion1">
        <p className="smallsquare">
            <img 
                src="\Capture.PNG" 
                className="img" 
                alt="my second image" 
                onClick={() => window.open('/Capture.PNG', '_blank')}
            />
        </p>
        <p className="title">TIC TAC TOI GAME</p>
        <p className="description">This game made with react<br/>This is made at the learning phase of react</p>
        </p>

        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub" onClick={() => window.open('https://github.com/fawazulhassan/tic-tac-game', '_blank')}>Git Hub</button>
        </div>
        <div className="square">
            <p className="portion1">
        <p className="smallsquare">
            <img 
                src="\Capture2.PNG" 
                className="img" 
                alt="my third image" 
                onClick={() => window.open('/Capture2.PNG', '_blank')}
            />
        </p>
        <p className="title">Fake review detection<br/>developer</p>
        <p className="description">Responsive website made with html and python<br/>see the review is AI generated or not</p>
        </p>

        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub" onClick={() => window.open('https://github.com/fawazulhassan/fake-review-detection', '_blank')}>Git Hub</button>
        </div>
        <div className="square">
            <p className="portion1">
        <p className="smallsquare">
            <img 
                src="\Flow-chart-of-density-based-traffic-control.png" 
                className="img" 
                alt="my fourth image" 
                onClick={() => window.open('/Flow-chart-of-density-based-traffic-control.png', '_blank')}
            />
        </p>
       <p className="title">Density based smart traffic light system.</p>
        <p className="description">Python project includes YOLO model. This project sees the density and allocates the time.</p>
        </p>
        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub" onClick={() => window.open('https://github.com/fawazulhassan/density-based-vehicle-detection', '_blank')}>Git Hub</button>
        </div>
          
    <div > 
    </div>
    </div>
)


 }
 export default Projects;