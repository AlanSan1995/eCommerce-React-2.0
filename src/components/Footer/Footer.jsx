import { Link } from "react-router-dom";
import "./Footer.css";
import { categories } from "../../contants/categories";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <footer className='Footer'>
      <div className='FooterSection'>
        <div className='FooterSectionLinks'>
          <h5>Categoria</h5>
          <Link to={`/products/${categories.TALLER}`}>Taller</Link>
          <Link to={`/products/${categories.CONTRUCCION}`}>Contruccion</Link>
          <Link to={`/products/${categories.ELECTRICIDAD}`}>Electricidad</Link>
        </div>
        <div className='FooterSectionLinks'>
          <h5>Ayuda</h5>
          <a href=''>¿Cómo comprar?</a>
          <a href=''>Preguntas generales</a>
          <a href=''>Vender</a>
          <a href=''>Comprar</a>
        </div>
        <div className='FooterSectionLinks'>
          <h5>Locales</h5>
          <a href=''>Buenos Aires</a>
          <a href=''>General Villegas</a>
          <a href=''>Moreno</a>
        </div>
        <div className='FooterSectionNewsletter'>
          <h5>SUSCRIBITE A NUESTRO NEWSLETTER</h5>
          <p>
            No te pierdas de toda la información de la temporada, nuevas <br />{" "}
            prendas y tendencias en Distrito Moda
          </p>
          <div>
            <input type='text' placeholder='Introduce tu Correo electronico' />
            <button>SUSCRIBIRSE</button>
          </div>
        </div>
      </div>
      <div className='FooterSectionSeguinos'>
        <h5>SEGUINOS</h5>
        <InstagramIcon />
        <WhatsAppIcon />
        <FacebookIcon />
      </div>
      <div className='FooterSectionCopy'>
        © 2017 - 2021 Ecommerce Alan | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
