import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/Highlights/index';

class App extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
