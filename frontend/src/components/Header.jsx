import { Link } from "react-router-dom";
import logo from "../assets/Logo-biblix.png";

function Header() {
  return (
    <header className=" shadow-lg border- bg-gray-200 p-4 flex justify-between sticky top-0">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-20 w-auto"></img>
        </Link>
      </div>
      <nav className="flex text-xl font-medium items-center">
        <Link className="hover:text-gray-700 px-4" to={"/"}>
          Librairie
        </Link>
        <Link
          className=" hover:text-gray-700 border-l border-gray-300 px-4"
          to={"/meslivres"}
        >
          Mes Livres
        </Link>
        <Link
          className=" hover:text-gray-700 border-l border-gray-300 px-4"
          to={"/mesfavoris"}
        >
          Mes Favoris
        </Link>
      </nav>
    </header>
  );
}

export default Header;
