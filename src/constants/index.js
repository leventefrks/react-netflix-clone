import { API_KEY } from './../api';

export const REQUEST = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  drama: `/discover/movie?with_genres=18&primary_release_year=2021&api_key=${API_KEY}`,
  comedy: `/discover/movie?with_genres=35&primary_release_year=2021&api_key=${API_KEY}`,
};
