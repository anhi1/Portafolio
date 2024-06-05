import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar.jsx";
import "./styles/styles.css"
function App() {
  return (
        <BrowserRouter>
       
          <Navbar />
          <HomePage/>
          
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            
          </Routes> */}
        </BrowserRouter>
 
  );
}

export default App;
