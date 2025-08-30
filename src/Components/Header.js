import React from 'react';

const Header = ({
    menuActive,
    setMenuActive,
    searchActive,
    setSearchActive,
    setLoginActive,
}) => {
    return (
    <header>
        <div
        id="menu-bar"
        className={`menu-bar ${menuActive ? 'fa-times' : ''}`}
        onClick={() => setMenuActive(!menuActive)}
        style={{ cursor: 'pointer' }}
        >
        ☰
        </div>

        <a href="#" className="logo">
        <span>T</span>ravel
        </a>

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
            className={`fas fa-search ${searchActive ? 'fa-times' : ''}`}
            id="search-btn"
            onClick={() => setSearchActive(!searchActive)}
            style={{ cursor: 'pointer' }}
        />
        <i
            className="fas fa-user"
            id="login-btn"
            onClick={() => setLoginActive(true)}
            style={{ cursor: 'pointer' }}
        />
        </div>

        <form className={`search-bar-container ${searchActive ? 'active' : ''}`}>
        <input type="search" id="search-bar" placeholder="search here...." />
        <label htmlFor="search-bar" className="fas fa-search" />
        </form>
    </header>
    );
};

export default Header;
