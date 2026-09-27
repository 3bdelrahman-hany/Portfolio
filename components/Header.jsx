import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

function Header({ isDark, toggleTheme }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to="/" className={style.logoLink}>
          <span className={style.logoInitials}>AH</span>
          <span className={style.logoName}>Abdelrahman Hany</span>
        </Link>
      </div>

      <nav className={style.nav}>
        <Link
          to="/"
          className={`${style.navLink} ${isActive('/') ? style.active : ''}`}
        >
          Home
        </Link>
        <Link
          to="/Contacts"
          className={`${style.navLink} ${isActive('/Contacts') ? style.active : ''}`}
        >
          Contact
        </Link>
        <button
          className={style.themeToggle}
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? (
            <svg className={style.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg className={style.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
