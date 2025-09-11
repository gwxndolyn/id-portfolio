import React, { useState, useEffect } from 'react';

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experiences', href: '#experiences', id: 'experiences' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const handleNavClick = (href, id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'skills') {
        const offsetTop = element.offsetTop - 120;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className={`flex items-center justify-center px-8 py-4 rounded-full border border-white/20 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'backdrop-blur-xl bg-white/10 shadow-2xl shadow-black/20' 
            : 'backdrop-blur-md bg-white/5'
        }`}>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-3 transition-all duration-300 ease-in-out ${
            isScrolled 
              ? '' 
              : ''
          }`}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 top-3 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`}></span>
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`absolute top-16 right-0 w-48 rounded-md transition-all duration-300 ease-in-out ${
            isScrolled 
              ? 'backdrop-blur-xl bg-white/5 shadow-2xl shadow-black/20' 
              : 'backdrop-blur-md bg-white/5'
          }`}>
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                      activeSection === item.id
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default FloatingNavbar;