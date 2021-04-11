import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';

const RowTitle = ({ title }) => {
  return (
    <h2 className="flex items-center group duration-300 ease-in text-white font-bold select-none capitalize text-xl tracking-wide">
      {title}
      <FaChevronRight className="opacity-0 group-hover:opacity-100 w-3 h-3 ml-2 fill-current" />
    </h2>
  );
};

RowTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RowTitle;
