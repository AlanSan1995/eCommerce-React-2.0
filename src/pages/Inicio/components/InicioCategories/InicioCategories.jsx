import { Link } from "react-router-dom";
import "./InicioCategories.css";
import imgTaller from "../../assets/img/Taller.jpg";
import imgConstruccion from "../../assets/img/Construccion.jpg";
import imgElectricidad from "../../assets/img/Electricidad.jpg";
import { categories } from "../../../../contants/categories";
import { wordToUpercase } from "../../../../utils/wordToUpercase";

function InicioCategories() {
  return (
    <div className='InicioCategories'>
      <Link to={`/products/${categories.TALLER}`}>
        <div
          style={{
            backgroundImage: `url(${imgTaller})`,
          }}></div>
        <h3>{wordToUpercase(categories.TALLER)}</h3>
      </Link>
      <Link to={`/products/${categories.CONTRUCCION}`}>
        <div
          style={{
            backgroundImage: `url(${imgConstruccion})`,
          }}></div>
        <h3>{wordToUpercase(categories.CONTRUCCION)}</h3>
      </Link>
      <Link to={`/products/${categories.ELECTRICIDAD}`}>
        <div
          style={{
            backgroundImage: `url(${imgElectricidad})`,
          }}></div>
        <h3>{wordToUpercase(categories.ELECTRICIDAD)}</h3>
      </Link>
    </div>
  );
}

export default InicioCategories;
