import api from '../services/marvelApi';
import buildMarvelApiRoute from '../utils/index';

class CharacterController {
  // GET  http://localhost:3333/characters
  async index(request, response) {
    try {
      const { offset, nameStartsWith } = request.query;

      let queries = {
        limit: 100,
        offset,
      };

      if (nameStartsWith) {
        queries = {
          limit: 100,
          offset: 0,
          nameStartsWith,
        }
      }

      const url = buildMarvelApiRoute('/characters', queries);

      const { data } = await api.get(url);

      return response.json({
        characters: data.data.results,
        total: data.data.total,
      });
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  // GET  https://localhost:3333/characters/:id
  async show(request, response) {
    try {
      const { id } = request.params;

      const url = buildMarvelApiRoute(`/characters/${id}`);

      const { data } = await api.get(url);

      return response.json(data.data.results);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

}

export default new CharacterController();
