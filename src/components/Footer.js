import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const Footer = ({ children }) => {
  return (
    <footer className="max-w-5xl mx-auto mb-12 text-gray-400">
      <ul className="flex space-x-5 mb-3">
        <li>
          <a href="">
            <FaFacebookSquare className="w-8 h-8 fill-current" />
          </a>
        </li>
        <li>
          <a href="">
            <FaInstagramSquare className="w-8 h-8 fill-current" />
          </a>
        </li>
        <li>
          <a href="">
            <FaYoutubeSquare className="w-8 h-8 fill-current" />
          </a>
        </li>
      </ul>
      <div className="grid grid-cols-4 grid-flow-row text-sm">
        <ul className="flex flex-col capitalize space-y-4">
          <li>
            <a className="hover:underline" href="">
              audio and aubtitles
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              media center
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              privacy
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              contact us
            </a>
          </li>
        </ul>
        <ul className="flex flex-col capitalize space-y-4">
          <li>
            <a className="hover:underline" href="">
              audio description
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              investor relations
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              legal notices
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              contact us
            </a>
          </li>
        </ul>
        <ul className="flex flex-col capitalize space-y-4">
          <li>
            <a className="hover:underline" href="">
              audio and aubtitles
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              help center
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              jobs
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              cookie preferencies
            </a>
          </li>
        </ul>
        <ul className="flex flex-col capitalize space-y-4">
          <li>
            <a className="hover:underline" href="">
              gift cards
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              terms of use
            </a>
          </li>
          <li>
            <a className="hover:underline" href="">
              corporate information
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
