import React, { Component } from 'react';
// import './App.css';
import Navbar from './Navbar/Navbar'
import About from './About/About'

class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <About></About>
      </div>
    );
  }
}

export default App;
