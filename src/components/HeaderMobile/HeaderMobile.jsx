import "./HeaderMobile.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function HeaderMobile() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <header className='HeaderMobile'>
      <div className='HeaderMobileTop'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <button onClick={() => setMenuExpanded(!menuExpanded)}>
          <MenuIcon />
        </button>
      </div>

      <ul
        className={`HeaderMobileNav ${
          menuExpanded ? "HeaderMobileNavShow" : ""
        }`}>
        <li>
          <Link to='/products'>Productos</Link>
        </li>
        <li>
          <Link to='/ideas'>ideas e inspiraciones</Link>
        </li>
        <li>
          <Link to='/locals'>Locales</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderMobile;
