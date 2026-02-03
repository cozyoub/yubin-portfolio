import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GITHUB_URL = 'https://github.com/ubzzang';
const CONTACT_EMAIL = 'cozyoub@gmail.com';
const BLOG_URL = 'https://velog.io/@cozyoub';
const BLOG_LABEL = 'velog.io/@cozyoub';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((window.scrollY || document.documentElement.scrollTop) > 100);
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
      <header className={`header-new ${isScrolled ? 'on' : ''}`}>
        <div className="header-new__inner">
          <div className="header-new__left">
            <button
              type="button"
              className="header-new__hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴 열기"
            >
              <span /><span /><span />
            </button>
            <div className="header-new__logo-icon" aria-hidden>
              <a href="/">
               <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L18.5 12.5L28 15L18.5 17.5L16 28L13.5 17.5L4 15L13.5 12.5L16 2Z" fill="var(--main-color-pink)"/>
              </svg>
              </a>
            </div>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="header-new__github-btn"
          >
            See on GitHub
          </a>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="메뉴">
          <button
            type="button"
            className="menu-overlay__close"
            onClick={closeMenu}
            aria-label="메뉴 닫기"
          >
            ×
          </button>
          <div className="menu-overlay__content">
            <nav className="menu-overlay__nav">
              <Link to="/" className="menu-overlay__link" onClick={closeMenu}>HOME</Link>
              <Link to="/project" className="menu-overlay__link" onClick={closeMenu}>PROJECT</Link>
              <Link to="/work" className="menu-overlay__link" onClick={closeMenu}>WORK</Link>
            </nav>
            <div className="menu-overlay__card menu-overlay__card--contact">
              <div className="menu-overlay__card-label">
                <span className="menu-overlay__card-label-text">CONTACT</span>
                <span className="menu-overlay__card-label-icon" aria-hidden>＊</span>
              </div>
              <div className="menu-overlay__card-body menu-overlay__card-body--contact">
                <p><strong>EMAIL</strong></p>
                <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
                <p><strong>CALL</strong></p>
                <p><a href="">010.4458.6076</a></p>
              </div>
            </div>
          </div>
          <div className="menu-overlay__backdrop" onClick={closeMenu} aria-hidden />
        </div>
      )}
    </>
  );
};

export default Header;
