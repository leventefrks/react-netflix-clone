import PropTypes from 'prop-types';
import axios from '../axios';
import { useEffect, useState } from 'react';
import { POSTER_PATH_URL } from './../constants';

const Row = ({ title, url }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  const [movies, setMovies] = useState([]);

  return (
    <div className="w-full ml-10">
      <h2 className="text-white font-bold select-none capitalize text-xl tracking-wide">
        {title}
      </h2>
      <div className="w-full flex space-x-3 py-4 pl-4 overflow-x-scroll overflow-y-hidden">
        {movies &&
          movies.map(movie => (
            <div
              className="row cursor-pointer transform ease-in duration-200 hover:scale-110 object-contain"
              key={movie.id}
            >
              <img
                src={`${POSTER_PATH_URL}${movie.poster_path}`}
                alt={movie.original_title}
                draggable="false"
                className="w-full min-w-150 object-contain rounded-sm select-none"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Row;
