import "./ProductModel.css";
import CloseIcon from "@mui/icons-material/Close";

function ProductModel({ productData, onCloseModal }) {
  return (
    <div className='ProductModal'>
      <div className='ProductModalBackground'></div>
      <div className='ProductModalContent'>
        <div>
          <h3>{productData.title}</h3>
          <button onClick={onCloseModal}>
            <CloseIcon />
          </button>
        </div>
        <img src={productData.image} alt='' />
        <span>${productData.price}</span>
        <p>{productData.description}</p>
      </div>
    </div>
  );
}

export default ProductModel;
