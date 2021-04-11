import { API_KEY } from './../api';

const BASE_DISCOVER_URL_BY_GENRE = '/discover/movie?with_genres=';

const GENRE_DRAMA_ID = 18;
const GENRE_COMEDY_ID = 35;
const GENRE_ACTION_ID = 28;
const GENRE_DOCUMENTARY_ID = 99;
const GENRE_HORROR_ID = 27;

export const REQUESTS = [
  {
    id: 1,
    title: 'trending',
    url: `/trending/all/week?api_key=${API_KEY}`,
  },
  {
    id: 2,
    title: 'drama',
    url: `${BASE_DISCOVER_URL_BY_GENRE}${GENRE_DRAMA_ID}&primary_release_year=2021&api_key=${API_KEY}`,
  },
  {
    id: 3,
    title: 'comedies',
    url: `${BASE_DISCOVER_URL_BY_GENRE}${GENRE_COMEDY_ID}&primary_release_year=2021&api_key=${API_KEY}`,
  },
  {
    id: 4,
    title: 'action',
    url: `${BASE_DISCOVER_URL_BY_GENRE}${GENRE_ACTION_ID}&primary_release_year=2021&api_key=${API_KEY}`,
  },
  {
    id: 5,
    title: 'documentaries',
    url: `${BASE_DISCOVER_URL_BY_GENRE}${GENRE_DOCUMENTARY_ID}&primary_release_year=2021&api_key=${API_KEY}`,
  },
  {
    id: 6,
    title: 'horror',
    url: `${BASE_DISCOVER_URL_BY_GENRE}${GENRE_HORROR_ID}&primary_release_year=2021&api_key=${API_KEY}`,
  },
];

export const POSTER_PATH_URL = 'https://image.tmdb.org/t/p/w500';
