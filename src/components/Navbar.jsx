import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white flex flex-col md:flex-row justify-between py-5 px-10">
      <div className="flex flex-col md:flex-row items-center">
        <Link to="/" className="flex flex-col md:flex-row md:gap-x-4 mb-2">
          <img className="inline-flex items-center" style={{ width: "100px", height: "auto" }} src="/logo.svg"/>
        </Link>
      </div>

      {/* <ul className="flex flex-col md:flex-row md:space-x-4 items-center">
        <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg mb-2">
          <Link to="/contact">Contacto</Link>
        </li>
        
        <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg mb-2">
          <Link to="/about">Sobre mí</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
