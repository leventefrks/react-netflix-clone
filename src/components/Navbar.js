import logo from './../assets/img/logo.svg';
import TheMenu from './TheMenu';

export default function Navbar() {
  return (
    <header className="w-full fixed z-10 flex justify-between bg-black">
      <nav className="w-full py-4 pl-20 flex items-center">
        <img
          src={logo}
          alt="netflix logo"
          className="object-contain w-32 h-full"
        />
        <TheMenu />
      </nav>
    </header>
  );
}
