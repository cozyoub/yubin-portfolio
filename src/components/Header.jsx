import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const GITHUB_URL = 'https://github.com/ubzzang';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((window.scrollY || document.documentElement.scrollTop) > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`ke-header ${isScrolled ? 'ke-header--scrolled' : ''}`}>
        <div className="ke-header__inner">
          <Link to="/" className="ke-header__logo">YB</Link>
          <nav className="ke-header__nav">
            <Link to="/" className="ke-header__link">Home</Link>
            <Link to="/project" className="ke-header__link">Project</Link>
            <Link to="/work" className="ke-header__link">Work</Link>
          </nav>
          <div className="ke-header__right">
            <button
              type="button"
              className="ke-header__theme"
              onClick={toggleTheme}
              aria-label={isDark ? '라이트 모드' : '다크 모드'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ke-header__github"
            >
              GitHub
            </a>
            <button
              type="button"
              className="ke-header__menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="ke-menu" role="dialog" aria-modal="true">
          <div className="ke-menu__inner">
            <button
              type="button"
              className="ke-menu__close"
              onClick={closeMenu}
              aria-label="닫기"
            >
              ✕
            </button>
            <nav className="ke-menu__nav">
              <Link to="/" className="ke-menu__link" onClick={closeMenu}>Home</Link>
              <Link to="/project" className="ke-menu__link" onClick={closeMenu}>Project</Link>
              <Link to="/work" className="ke-menu__link" onClick={closeMenu}>Work</Link>
              <a href="mailto:cozyoub@gmail.com" className="ke-menu__link" onClick={closeMenu}>Contact</a>
            </nav>
          </div>
          <div className="ke-menu__backdrop" onClick={closeMenu} />
        </div>
      )}
    </>
  );
};

export default Header;
