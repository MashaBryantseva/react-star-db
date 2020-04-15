export default class SwapiService {
  _swapiApi = 'https://apxuapi.herokuapp.com/api';

  getAllPeople = async () => {
    const res = await this._getResource(`people`);

    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const res = await this._getResource(`people/${id}`);

    return this._transformPerson(res);
  };

  getAllPlanets = async () => {
    const res = await this._getResource(`planets`);

    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const res = await this._getResource(`planets/${id}`);

    return this._transformPlanet(res);
  };

  getAllStarships = async () => {
    const res = await this._getResource(`starships`);

    return res.results.map(this._transformStarships);
  };

  getStarship = async (id) => {
    const res = await this._getResource(`starships/${id}`);

    return this._transformStarships(res);
  };

  _getResource = async (path) => {
    const url = `${this._swapiApi}/${path}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} receive`);
    }

    return await res.json();
  };

  _transformPlanet = (planet) => {
    const {
      name,
      diameter,
      rotation_period: rotationPeriod,
      population,
      url,
    } = planet;

    return ({
      name,
      diameter,
      rotationPeriod,
      population,
      id: this._extractId(url),
    });
  };

  _transformPerson = (person) => {
    const {
      name,
      birth_year: birthYear,
      height,
      mass,
      url,
    } = person;

    return ({
      name,
      birthYear,
      height,
      mass,
      id: this._extractId(url),
    });
  };

  _transformStarships = (starship) => {
    const {
      name,
      passengers,
      crew,
      url,
    } = starship;

    return ({
      name,
      passengers,
      crew,
      id: this._extractId(url),
    });
  };

  _extractId = (url) => {
    const idRegExp = /\/([0-9]*)\/$/;

    return url.match(idRegExp)[1];
  };
}
