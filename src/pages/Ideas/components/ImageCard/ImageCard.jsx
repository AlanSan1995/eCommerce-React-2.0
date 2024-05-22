import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <button className='ImageCard'>
      <div
        className='ImageCardImage'
        style={{ backgroundImage: `url(${image.image})` }}></div>
      <h2>{image.name}</h2>
    </button>
  );
}

export default ImageCard;
