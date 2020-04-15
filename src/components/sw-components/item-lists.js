import withSwapiService from '../hoc-helpers/with-swapi-service';
import withData from '../hoc-helpers/with-data';
import compose from '../hoc-helpers/compose';

import ItemList from '../item-list';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(withSwapiService(mapPersonMethodsToProps), withData)(ItemList);
const PlanetList = compose(withSwapiService(mapPlanetMethodsToProps), withData)(ItemList);
const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps), withData)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
