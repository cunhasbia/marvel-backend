import axios from 'axios';

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

export default marvelApi;
