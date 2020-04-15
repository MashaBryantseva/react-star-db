import React from 'react';

import withSwapiService from '../hoc-helpers/with-swapi-service';

import ItemDetails from '../item-details';
import Record from '../record';

const PersonDetails = (props) => (
  <ItemDetails { ...props }>
    <Record label="Birth year" field="birthYear" />
    <Record label="Height" field="height" />
    <Record label="Weight" field="mass" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({ getData: swapiService.getPerson });

export default withSwapiService(mapMethodsToProps)(PersonDetails);