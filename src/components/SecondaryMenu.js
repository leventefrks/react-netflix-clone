import { FaSearch } from 'react-icons/fa';

export default function SecondaryMenu() {
  return (
    <ul className="flex items-center space-x-5">
      <li className="flex items-center">
        <a href="#" className="text-white">
          <FaSearch className="w-4 h-4 fill-current" />
        </a>
      </li>
    </ul>
  );
}
