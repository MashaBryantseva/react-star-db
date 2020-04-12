import React from 'react';

// Components
import Header from '../header';
import RandomPlanetContainer from '../random-planet-container';
import ItemList from '../item-list';

import './style.css';

const App = () => (
  <div className="app-container">
    <Header />
    <RandomPlanetContainer />

    <div className="row">
      <div className="col">
        <ItemList />
      </div>
    </div>
  </div>
);

export default App;
