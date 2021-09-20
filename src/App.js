import React from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'

import './css/Header.css';
import './css/Main.css';
import './css/About.css';
import './css/Skill.css';
import './css/Project.css';
import './css/Contact.css';
import './css/Footer.css';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
