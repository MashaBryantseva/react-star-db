import React from 'react';

import withSwapiService from '../hoc-helpers/with-swapi-service';

import ItemDetails from '../item-details';
import Record from '../record';

const StarshipDetails = (props) => (
  <ItemDetails { ...props }>
    <Record label="Crew" field="crew" />
    <Record label="Passengers" field="passengers" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({ getData: swapiService.getStarship });

export default withSwapiService(mapMethodsToProps)(StarshipDetails);