const Header = () => {
    return (
        <header>
            <div id="menu-bar" className="menu-bar"></div>
            <a href="#" className="logo"><span>T</span>ravel</a>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#book">Book</a>
                <a href="#packages">Packages</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
                <i className="fas fa-search" id="search-btn"/>
                <i className="fas fa-user" id="login-btn"/>
            </div>

            <form action="" className="search-bar-container">
                <input type="search" id="search-bar" placeholder="search here...."/>
                <label for="search-bar" className="fas fa-search"/>
            </form>
        </header>
    )


}


export default Header;