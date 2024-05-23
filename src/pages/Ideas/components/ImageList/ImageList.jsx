import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageList.css";
import ImageModal from "../ImageModal/ImageModal";

function ImageList({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const onSelectImage = (selectedImageData) => {
    setSelectedImage(selectedImageData);
  };
  const onRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <div className='ImageList'>
      {selectedImage && (
        <ImageModal imageData={selectedImage} onCloseModal={onRemoveImage} />
      )}
      {images.map((img, index) => (
        <ImageCard image={img} key={index + 1} onSelectImage={onSelectImage} />
      ))}
    </div>
  );
}

export default ImageList;
