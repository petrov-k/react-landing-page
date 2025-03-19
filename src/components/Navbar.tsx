import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { scrollToTop, scrollToElement } from '../utils/scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const createScrollHandler = (elementId: string) => async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    await new Promise(resolve => setTimeout(resolve, 100));

    if (location.pathname !== '/') {
      window.localStorage.setItem('scrollTo', elementId);
      window.location.href = '/';
    } else {
      scrollToElement(elementId);
    }
  };

  const handleSuitableForClick = createScrollHandler('suitable-for');
  const handleYouCanClick = createScrollHandler('you-can');
  const handleBonusesClick = createScrollHandler('bonuses');
  const handleAuthorClick = createScrollHandler('about-author');
  const handleProgramClick = createScrollHandler('program');
  const handleQuestionsClick = createScrollHandler('questions');

  useEffect(() => {
    // Check if we need to scroll after navigation
    const scrollTo = window.localStorage.getItem('scrollTo');
    if (scrollTo) {
      window.localStorage.removeItem('scrollTo');
      // Small delay to ensure the content is rendered
      setTimeout(() => {
        scrollToElement(scrollTo);
      }, 0);
    }
  }, [location]);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors" onClick={handleNavClick}>
              PETROV
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={handleToggle}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleSuitableForClick}
            >
              Для кого
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleYouCanClick}
            >
              Після курсу ти зможеш
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleBonusesClick}
            >
              Бонуси
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleAuthorClick}
            >
              Про автора
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleProgramClick}
            >
              Програма
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              onClick={handleQuestionsClick}
            >
              Начайстіші запитання
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleSuitableForClick}
          >
            Для кого
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleYouCanClick}
          >
            Після курсу ти зможеш
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleBonusesClick}
          >
            Бонуси
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleAuthorClick}
          >
            Про автора
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleProgramClick}
          >
            Програма
          </Link>
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={handleQuestionsClick}
          >
            Начайстіші запитання
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
