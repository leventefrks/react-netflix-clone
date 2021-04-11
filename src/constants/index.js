import { API_KEY } from './../api';

export const REQUESTS = [
  {
    id: 1,
    title: 'trending',
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  {
    id: 2,
    title: 'drama',
    url: `/discover/movie?with_genres=18&primary_release_year=2021&api_key=${API_KEY}`,
  },
  {
    id: 3,
    title: 'comedies',
    url: `/discover/movie?with_genres=35&primary_release_year=2021&api_key=${API_KEY}`,
  },
];

export const POSTER_PATH_URL = 'https://image.tmdb.org/t/p/w500';
