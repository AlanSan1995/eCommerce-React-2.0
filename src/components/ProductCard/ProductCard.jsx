import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className='ProductCard'>
      <div
        className='ProductCardImage'
        style={{ backgroundImage: `url(${product.image})` }}></div>
      <span>${product.price}</span>
      <h2>{product.title}</h2>
    </div>
  );
}

export default ProductCard;
