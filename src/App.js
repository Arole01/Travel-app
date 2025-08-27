import Book from "./Components/Book";
import Brand from "./Components/Brand";
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

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Home/>
      <Book/>
      <Packages/>
      <Services/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Brand/>
      <Footer/>
    </div>
  );
}

export default App;
