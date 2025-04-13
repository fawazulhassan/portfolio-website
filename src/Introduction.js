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
        <button className='CVbutton'>Download CV</button>
        </div>
        <div className='rightside'>
        <div className='circle1'>
          </div>
          <div className='circle2'>
          </div>
          <div className='circle3' ><img src="https://i.pinimg.com/736x/75/fb/6b/75fb6b42534199be09d7e16db46e9469.jpg" className='circle-image'></img>
          </div>
          </div>
          
      </div>
    </div>
    </div>
);
}
export default Introduction;