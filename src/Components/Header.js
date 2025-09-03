import React from 'react';

const Header = ({
  menuActive,
  setMenuActive,
  searchActive,
  setSearchActive,
  setLoginActive,
}) => {
  // Toggle menu and close search if open
  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    if (searchActive) setSearchActive(false);
  };

  // Toggle search and close menu if open
  const handleSearchClick = () => {
    setSearchActive(!searchActive);
    if (menuActive) setMenuActive(false);
  };

  return (
    <header>
      <div
        id="menu-bar"
        className={`menu-bar ${menuActive ? 'fa-times' : ''}`}
        onClick={handleMenuClick}
        style={{ cursor: 'pointer' }}
        role="button"
        aria-label="Toggle menu"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter') handleMenuClick(); }}
      >
        ☰
      </div>

      <a href="#" className="logo">
        <span>T</span>ravel
      </a>

      {/* Navbar: always visible on desktop, toggle on mobile */}
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#book">Book</a>
        <a href="#packages">Packages</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="icons">
        <i
          className={`fas ${searchActive ? 'fa-times' : 'fa-search'}`}
          id="search-btn"
          onClick={handleSearchClick}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Toggle search"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') handleSearchClick(); }}
        />
        <i
          className="fas fa-user"
          id="login-btn"
          onClick={() => setLoginActive(true)}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Open login form"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') setLoginActive(true); }}
        />
      </div>

      <form className={`search-bar-container ${searchActive ? 'active' : ''}`} onSubmit={e => e.preventDefault()}>
        <input
          type="search"
          id="search-bar"
          placeholder="search here...."
          autoFocus={searchActive}
        />
        <label htmlFor="search-bar" className="fas fa-search" />
      </form>
    </header>
  );
};

export default Header;
