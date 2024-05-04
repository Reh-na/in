import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from './../images/Insaf-Logo.png';
import 'animate.css';
import LanguageSelector from './LanguageSelector'; // Import LanguageSelector component
const Header = ({ language, content, onSelectLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const isRTL = language === 'ar'; // Check if language is Arabic
  return (
    <nav className="bg-transparent fixed z-50 w-full ">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between h-16 " style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div className="flex justify-between" style={{ flexDirection: isRTL ? 'row-reverse' : ' row' }}>
            <div className="flex-shrink-0 flex items-center me-4" style={{ marginLeft: isRTL ? '16px' : '0' }}>
              <Link to='/'>
                <img className="block h-6 sm:h-9 w-auto" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:justify-center sm:items-center sm:space-x-8">
              <HeaderLinks content={content} isRTL={isRTL} onClick={handleClick} />
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className=" hidden  sm:flex justify-center items-center space-x-8">
            <LanguageSelector onSelectLanguage={onSelectLanguage} onClick={handleClick}/>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block sm:hidden open' : 'hidden closed'} sm:flex-col z-10 w-full bg-zinc-800 animate__animated animate__fadeInDown`} id="mobile-menu">
        <div className="  w-full px-2 pt-2 pb-3 space-y-1 flex flex-col p-4   "  >
          <HeaderLinks content={content}  />
          <div className="flex sm:hidden p-2  space-x-8 ">
            <LanguageSelector onSelectLanguage={onSelectLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeaderLinks = ({ content, isRTL ,onClick }) => {
  const links = [
    { to: '/', label: content.header.home },
    { to: '/about', label: content.header.about },
    { to: '/products', label: content.header.products },
    { to: '/contact', label: content.header.contact },
  ];

  return (
    <>
      {isRTL ? (
        links.reverse().map((link, index) => (
          <NavLink key={index} to={link.to} 
          onClick={onClick} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
            {link.label}
          </NavLink>
        ))
      ) : (
        links.map((link, index) => (
          <NavLink key={index} to={link.to} 
          onClick={onClick} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium p-2">
            {link.label}
          </NavLink>
        ))
      )}
    </>
  );
};

export default Header;
