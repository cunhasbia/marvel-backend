import api from '../services/marvelApi';
import buildMarvelApiRoute from '../utils/index';

class ComicController {
  // GET  https://localhost:3333/comics/:id
  async show(request, response) {
    try {
      const { id } = request.params;

      const url = buildMarvelApiRoute(`/comics/${id}`);

      const { data } = await api.get(url);

      return response.json(data.data.results);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new ComicController();
