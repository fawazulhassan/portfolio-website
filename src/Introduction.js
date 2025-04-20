import React from "react";
import './Introduction.css';

function Introduction(){
return(
  <div className="introduction">
    <div className="App" id='app'>
    <div className="body">
    <div className='side'>
    <p className='first'> Hello. I am Fawaz,</p>
    <p className='secound'>frontend developer</p>
    <p className='discription'>I'm a dedicated React developer specializing in building dynamic, <br />user-friendly web applications.
      Let's create efficient and innovative solutions together!</p>
    <button 
      className='CVbutton' 
      onClick={() => {
      const link = document.createElement('a');
      link.href = '/M.Fawaz ul hassan(CV).pdf'; // Replace with the actual path to your CV file
      link.download = 'Fawaz_CV.pdf'; // Replace with the desired file name
      link.click();
      }}
    >
      Download CV
    </button>
    </div>
    <div className='rightside'>
    <div className='circle1'>
      </div>
      <div className='circle2'>
      </div>
      <div className='circle3' ><img src="/IMG_9040.JPG" className='circle-image' alt="My Profile"></img>
      </div>
      </div>
      
    </div>
  </div>
  </div>
);
}
export default Introduction;