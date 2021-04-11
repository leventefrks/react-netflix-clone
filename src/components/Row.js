import PropTypes from 'prop-types';
import axios from '../axios';
import { FaChevronRight } from 'react-icons/fa';
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
    <div className="w-full ml-10 mr-10">
      <h2 className="text-white font-bold select-none capitalize text-xl tracking-wide">
        {title}
      </h2>
      <div className="group w-full flex space-x-3 py-4 overflow-x-scroll overflow-y-hidden relative">
        {movies &&
          movies.map(
            movie =>
              movie.poster_path && (
                <div
                  className="group row cursor-pointer transform ease-in duration-200 hover:scale-110 object-contain"
                  key={movie.id}
                >
                  <img
                    src={`${POSTER_PATH_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    draggable="false"
                    loading="lazy"
                    className="w-full min-w-150 object-contain rounded-sm select-none"
                  />
                </div>
              )
          )}
        <FaChevronRight className="opacity-0 group-hover:opacity-100 duration-200 ease-in absolute w-10 h-10 text-white fill-current cursor-pointer right-14 top-1/2" />
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Row;
