import Book from "./Components/Book";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Packages from "./Components/Packages"
import Review from "./Components/Review";
import Services from "./Components/Services";
import  "./Components/Styles/Styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  // Close menus/forms on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMenuActive(false);
      setSearchActive(false);
      setLoginActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header menuActive={menuActive}
        setMenuActive={setMenuActive}
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        loginActive={loginActive}
        setLoginActive={setLoginActive}/>
      <Form loginActive={loginActive} setLoginActive={setLoginActive}/>
      <Home/>
      <Book/>
      <Packages/>
      <Services/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;
