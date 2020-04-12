import React from 'react';

// Components
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

import './style.css';

const App = () => (
  <div className="app-container">
    <Header />
    <RandomPlanet />

    <div className="row">
      <div className="col">
        <ItemList />
      </div>
      <div className="col">
        <ItemList />
      </div>
    </div>
  </div>
);

export default App;
