import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';
import Logo from './Logo';
import PropTypes from 'prop-types';

const Navbar = ({ items }) => {
  return (
    <header className="w-full fixed z-10 flex justify-between bg-black">
      <nav className="w-full py-4 pl-20 pr-8 flex items-center">
        <div className="w-full flex items-center">
          <Logo />
          <PrimaryMenu items={items} />
        </div>
        <SecondaryMenu />
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  items: PropTypes.array,
};

export default Navbar;
