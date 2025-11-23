import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setClick(false); // Close mobile menu after clicking
    } else if (location.pathname !== '/') {
      // If we're not on the home page, navigate there first
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
    setClick(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scrolling after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          // Clear the state
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    }
  }, [location, navigate]);

  const menuItems = [
    { id: 'home', text: 'Home', type: 'scroll' },
    { id: 'projects', text: 'Projects', type: 'scroll' },
    { id: 'experience', text: 'Experience', type: 'scroll' },
    { id: 'about', text: 'About', type: 'scroll' },
    { id: 'contact', text: 'Contact', type: 'scroll' }
  ];

  const navMenu = (
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      {menuItems.map((item, index) => (
        <li 
          key={item.id} 
          onClick={() => item.type === 'scroll' ? scrollToSection(item.id) : setClick(false)}
          style={{ '--i': index + 1 }}
        >
          {item.type === 'scroll' ? (
            <a 
              href={`#${item.id}`}
              data-text={item.text}
              className={location.pathname === '/' ? '' : 'disabled'}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.text}
            </a>
          ) : (
            <Link 
              to={item.path}
              data-text={item.text}
            >
              {item.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" onClick={handleLogoClick} className="logo">
          <div className="logo-container">
            <h1 className="logo-text top">
              {'amar.'.split('').map((char, index) => (
                <span key={index} style={{ '--char-index': index }}>{char}</span>
              ))}
            </h1>
            <h1 className="logo-text bottom">
              {'amar.'.split('').map((char, index) => (
                <span key={index} style={{ '--char-index': index }}>{char}</span>
              ))}
            </h1>
          </div>
        </a>
        {!isMobile && navMenu}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "var(--text-color)" }} />
          ) : (
            <FaBars size={20} style={{ color: "var(--text-color)" }} />
          )}
        </div>
      </div>
      {isMobile && navMenu}
    </nav>
  );
};

export default Nav;
