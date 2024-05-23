import "./ImageModal.css";
import CloseIcon from "@mui/icons-material/Close";

function ImageModal({ imageData, onCloseModal }) {
  return (
    <div className='ImageModal'>
      <div className='ImageModalBackground'></div>
      <div className='ImageModalContent'>
        <div>
          <h3>{imageData.name}</h3>
          <button onClick={onCloseModal}>
            <CloseIcon />
          </button>
        </div>
        <img src={imageData.image} alt='' />
      </div>
    </div>
  );
}

export default ImageModal;
