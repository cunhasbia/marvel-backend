const apikey = '07f05d67192c439bf8203269fc153fdd';
const hash = 'a2110823d4049282bfbe666bd8e79fff';
const timestamp = '1609890812920';

const buildMarvelApiRoute = (route, queries) => {
  let url = `${route}?apikey=${apikey}&hash=${hash}&ts=${timestamp}`;

  if (queries) {
    for (const [key, value] of Object.entries(queries)) {
      url += `&${key}=${value}`;
    }
  }

  return url;
}

export default buildMarvelApiRoute;
