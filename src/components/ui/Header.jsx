import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Get Involved', path: '/get-involved', icon: 'Users' },
    { name: 'About Us', path: '/about-us', icon: 'Info' },
    { name: 'Partnership', path: '/partnership-portal', icon: 'Handshake' },
    { name: 'ValUAfrica Media', path: '/blog', icon: 'BookOpen' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
          : 'bg-gradient-to-br from-primary/10 via-accent/5 to-white/90 backdrop-blur-xl'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg bg-gradient-primary">
              <img 
                src="/assets/images/1001535678.webp" 
                alt="Valentine Unimuke Foundation Logo" 
                className="w-12 h-12 object-contain rounded-lg"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-gradient-primary">
                Valentine Unimuke Foundation
              </h1>
              <p className="text-xs text-gray-600 -mt-1">
                Creating value across Africa
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
                <span className="pointer-events-none absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-primary opacity-0 group-hover:opacity-60 rounded-full transition-opacity"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Dark Mode */}
          <div className="hidden lg:flex items-center space-x-4">
            <DarkModeToggle />
            <Link to="/donate">
              <Button 
                variant="default" 
                className="btn-modern"
                iconName="Heart"
                iconPosition="left"
                iconSize={16}
              >
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Dark Mode */}
          <div className="flex items-center space-x-2 lg:hidden">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link to="/donate" onClick={closeMenu}>
                  <Button 
                    variant="default" 
                    fullWidth
                    className="btn-modern w-full"
                    iconName="Heart"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Donate Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;