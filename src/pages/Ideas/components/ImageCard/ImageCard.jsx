import "./ImageCard.css";

function ImageCard({ image, onSelectImage }) {
  return (
    <button className='ImageCard' onClick={() => onSelectImage(image)}>
      <div
        className='ImageCardImage'
        style={{ backgroundImage: `url(${image.image})` }}></div>
      <h2>{image.name}</h2>
    </button>
  );
}

export default ImageCard;
