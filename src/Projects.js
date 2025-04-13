import React from "react";
import './Projects.css';

 
 function Projects() {
return( 
    <div className="projects" id='projects'>
        <p className="pro">Projects</p>
    <div className='square'>
        <p className="portion1">
        <p className="smallsquare"><img src="https://www.scnsoft.com/blog-pictures/ecommerce/furniture-website-design/blu-dot.jpg" className="img"></img></p>
        <p className="title">Furniture store landing page</p>
        <p className="description">Responsive HTML/CSS layout for online futniture<br/>store.HTML5,CSS3(SCSS)</p>
        </p>
        
        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub">Git Hub</button>
        
        </div>
        <div className="square">
        <p className="portion1">
        <p className="smallsquare"><img src="https://www.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/furniture%20website%20design_32023-1.png?width=893&height=600&name=furniture%20website%20design_32023-1.png" className="img"></img></p>
        <p className="title">Designer furniture store<br/>landing page</p>
        <p className="description">Responsive HTML/CSS layout for online store<br/>of designer furniture.HTML5,CSS3(SCSS)</p>
        </p>

        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub">Git Hub</button>
        </div>
        <div className="square">
            <p className="portion1">
        <p className="smallsquare"><img src="https://s3-alpha.figma.com/hub/file/3484860920/9adac246-5cfb-4a66-94b7-c12179edf5f1-cover.png" className="img"></img></p>
        <p className="title">Landing page for front-end<br/>developer</p>
        <p className="description">Responsive HTML/CSS layout for landing page<br/>for front-end developer.HTML5,CSS3(SCSS)</p>
        </p>

        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub">Git Hub</button>
        </div>
        <div className="square">
            <p className="portion1">
        <p className="smallsquare"><img src="https://cdn.prod.website-files.com/649e5739a37a89333394d403/65d52abbc027d49d491499c4_unnamed%20(6)-p-500.jpg" className="img"></img> </p>
       <p className="title">Website redesign<br/>for the Venus project</p>
        <p className="description">Responsive HTML/CSSlayout for the Venus project.<br/>HTML5,CSS3(SCSS)</p>
        </p>
        <button className="buttonlivepreview">live Preview</button> 
        <button className="buttongithub">Git Hub</button>
        </div>
          
    <div > 
    </div>
    </div>
)


 }
 export default Projects;