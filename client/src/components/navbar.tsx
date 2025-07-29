import type React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className='bg-[#f6c25b] shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link
            to='/'
            className='text-[#460809] text-xl sm:text-2xl font-bold transition-colors duration-300'
          >
            VaidyaTechnical
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-1 lg:space-x-4'>
            <Link
              to='/'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              About
            </Link>
            <Link
              to='/services'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/services')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              Services
            </Link>
            <Link
              to='/login'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/login')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              Login
            </Link>
            <Link
              to='/registration'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/registration')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              Registration
            </Link>
            <Link
              to='/contact'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-[#460809] hover:bg-indigo-500 hover:text-white hover:shadow-md'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white hover:text-indigo-200 focus:outline-none focus:text-indigo-200 transition-colors duration-300 p-2'
              aria-label='Toggle menu'
            >
              <div className='w-6 h-6 flex flex-col justify-center items-center space-y-1'>
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transform ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-2 pt-2 space-y-1 bg-indigo-700 rounded-lg mt-2'>
            <Link
              to='/'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to='/about'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/about')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to='/services'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/services')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to='/login'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/login')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to='/registration'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/registration')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Registration
            </Link>
            <Link
              to='/contact'
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/contact')
                  ? 'bg-indigo-800 text-white'
                  : 'text-white hover:bg-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
