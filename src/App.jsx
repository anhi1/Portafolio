import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import "./styles/styles.css"
import ListProject from "./pages/ListProject.jsx";
import About from "./pages/About.jsx";
function App() {
  return (
        <BrowserRouter>
       
          <Navbar />
          <HomePage/>
          <ListProject/>
          <About/>
          
        </BrowserRouter>
 
  );
}

export default App;
