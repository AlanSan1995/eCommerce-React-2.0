import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className='ProductList'>
      {products.map((prod, index) => (
        <ProductCard product={prod} key={index + 1} />
      ))}
    </div>
  );
}

export default ProductList;
