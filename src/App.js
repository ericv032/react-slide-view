import React, { Component } from 'react';
import './App.css';
import SlideView from './Components/SlideView/Index';
import Styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <header>
        <img src={require('../public/images/entrega-logo.svg')} />
        </header>
        <div className="slides-container">
        <SlideView />
        </div>
        <div>
        <p className="skip-link">Skip</p>
        </div>
        </div>
       
    );
  }
}

export default App;
