import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../data/data";
import "./Inicio.css";
import InicioCarrucel from "./components/InicioCarrucel/InicioCarrucel";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InicioCategories from "./components/InicioCategories/InicioCategories";

function Inicio() {
  const [productsLimit, setProductsLimit] = useState(10);

  return (
    <div className='Inicio'>
      <InicioCarrucel />
      <InicioCategories />
      <Link className='InicioLinkTitle' to='/products'>
        Productos
      </Link>
      <ProductList products={products.slice(0, productsLimit)} />
      {productsLimit != 20 ? (
        <button className='InicioVerMas' onClick={() => setProductsLimit(20)}>
          Mas Productos <ExpandMoreIcon />
        </button>
      ) : (
        <Link className='InicioIrAProductos' to='/products'>
          Ir a productos
        </Link>
      )}
    </div>
  );
}

export default Inicio;
