import { BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import "./styles/styles.css"
import ListProject from "./pages/ListProject.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
        <BrowserRouter>
       
          <Navbar /><br></br>
          <HomePage/>
          <ListProject/>
          <About/>
          <Footer/>
          
        </BrowserRouter>
 
  );
}

export default App;
