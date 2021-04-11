import React from 'react';

export default function TheMenu() {
  return (
    <ul className="flex space-x-4 ml-6">
      <li>
        <a href="#" className="text-white">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Tv Shows
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Movies
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          New & Popular
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          My List
        </a>
      </li>
    </ul>
  );
}
