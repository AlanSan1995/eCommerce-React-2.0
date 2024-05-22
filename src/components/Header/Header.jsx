import "./Header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className='Header'>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <ul className='HeaderNav'>
        <li>
          <Link to='/products'>Productos</Link>
        </li>
        <li>
          <Link to='/'>ideas e inspiraciones</Link>
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

export default Header;
