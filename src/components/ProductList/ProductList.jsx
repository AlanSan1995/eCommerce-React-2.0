import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import ProductModel from "../ProductModel/ProductModel";

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const onSelectProduct = (selectedProductData) => {
    setSelectedProduct(selectedProductData);
  };
  const onRemoveProduct = () => {
    setSelectedProduct(null);
  };
  return (
    <div className='ProductList'>
      {selectedProduct && (
        <ProductModel
          productData={selectedProduct}
          onCloseModal={onRemoveProduct}
        />
      )}
      {products.map((prod, index) => (
        <ProductCard
          product={prod}
          key={index + 1}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
