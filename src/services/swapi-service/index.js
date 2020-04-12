export default class SwapiService {
  _swapiApi = 'https://apxuapi.herokuapp.com/api';

  async getAllPeople() {
    const res = await this._getResource(`people`);

    return res.results;
  }

  async getPerson(id) {
    return await this._getResource(`people/${id}`);
  }

  async getAllPlanets() {
    const res = await this._getResource(`planets`);

    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const res = await this._getResource(`planets/${id}`);

    return this._transformPlanet(res);
  }

  async getAllStarships() {
    const res = await this._getResource(`starships`);

    return res.results;
  }

  async getStarship(id) {
    return await this._getResource(`starships/${id}`);
  }

  async _getResource(path) {
    const url = `${this._swapiApi}/${path}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} receive`);
    }

    return await res.json();
  }

  _transformPlanet(planet) {
    const {
      name,
      diameter,
      rotation_period: rotationPeriod,
      population,
    } = planet;

    return ({ name, diameter, rotationPeriod, population });
  }
}
