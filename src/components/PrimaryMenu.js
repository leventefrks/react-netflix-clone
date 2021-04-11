import PropTypes from 'prop-types';

const PrimaryMenu = ({ items }) => {
  return (
    <ul className="flex space-x-4 ml-6">
      {items.map(item => (
        <li>
          <a href="#" className="text-white capitalize">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

PrimaryMenu.propTypes = {
  items: PropTypes.array,
};

export default PrimaryMenu;
