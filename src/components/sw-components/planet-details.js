import React from 'react';

import withSwapiService from '../hoc-helpers/with-swapi-service';

import ItemDetails from '../item-details';
import Record from '../record';

const PlanetDetails = (props) => (
  <ItemDetails { ...props }>
    <Record label="Diameter" field="diameter" />
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Population" field="population" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({ getData: swapiService.getPlanet });

export default withSwapiService(mapMethodsToProps)(PlanetDetails);