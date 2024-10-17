import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">FUTURE CITY</h1>
        <nav>
          <ul className="flex space-x-6">
            {['HOME', 'CITY', 'EXPLORE', 'REVIEW', 'BLOG', 'CONTACT'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-gray-800">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;