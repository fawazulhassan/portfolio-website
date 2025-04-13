import logo from './logo.svg';
import React from 'react';
import './App.css';
import  Introduction from'./Introduction';
import Projects from './Projects';
import Tecnologies from'./Tecnologies';
import Skills from './SKills';
import Aboutme from './Aboutme';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div class="main-body">
    <NavBar />
    <Introduction />
    <Projects />
    <Tecnologies />
     <Skills/>
     <Aboutme/>
     <Footer/>

    </div>
  );
}

export default App;
