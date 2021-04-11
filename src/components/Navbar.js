import logo from './../assets/img/logo.svg';
import PrimaryMenu from './PrimaryMenu';
import SecondaryMenu from './SecondaryMenu';

export default function Navbar() {
  return (
    <header className="w-full fixed z-10 flex justify-between bg-black">
      <nav className="w-full py-4 pl-20 pr-8 flex items-center">
        <div className="w-full flex items-center">
          <img
            src={logo}
            alt="netflix logo"
            className="object-contain w-32 h-full"
          />
          <PrimaryMenu />
        </div>
        <SecondaryMenu />
      </nav>
    </header>
  );
}
