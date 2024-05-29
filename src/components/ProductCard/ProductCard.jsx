import "./ProductCard.css";

function ProductCard({ product, onSelectProduct }) {
  return (
    <button className='ProductCard' onClick={() => onSelectProduct(product)}>
      <div
        className='ProductCardImage'
        style={{ backgroundImage: `url(${product.image})` }}></div>
      <span>${product.price}</span>
      <h2>{product.title}</h2>
    </button>
  );
}

export default ProductCard;
