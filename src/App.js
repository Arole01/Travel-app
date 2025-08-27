import Book from "./Components/Book";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Packages from "./Components/Packages"
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Home/>
      <Book/>
      <Packages/>
      <Services/>
    </div>
  );
}

export default App;
