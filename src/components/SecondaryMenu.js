import { FaSearch, FaGift, FaBell } from 'react-icons/fa';

export default function SecondaryMenu() {
  return (
    <ul className="flex items-center">
      <li className="flex items-center space-x-9">
        <a href="#" className="text-white">
          <FaSearch className="w-6 h-6 fill-current" />
        </a>
        <a href="#" className="text-white">
          <FaGift className="w-6 h-6 fill-current" />
        </a>
        <a href="#" className="text-white">
          <FaBell className="w-6 h-6 fill-current" />
        </a>
      </li>
    </ul>
  );
}
