import ImageCard from "../ImageCard/ImageCard";
import "./ImageList.css";

function ImageList({ images }) {
  return (
    <div className='ImageList'>
      {images.map((img, index) => (
        <ImageCard image={img} key={index + 1} />
      ))}
    </div>
  );
}

export default ImageList;
