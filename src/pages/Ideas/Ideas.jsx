import "./Ideas.css";
import ImageSearchSharpIcon from "@mui/icons-material/ImageSearchSharp";
import ImageList from "./components/ImageList/ImageList";
import { imagesSpacesDesign } from "../../data/imagesData";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Ideas() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState(imagesSpacesDesign);
  const inputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchData = () => {
    if (searchValue) {
      setImages(
        imagesSpacesDesign.filter((img) => img.name.startsWith(searchValue))
      );
    }
  };
  return (
    <div className='Ideas'>
      <div className='IdeasSearch'>
        <div>
          <div className='IdeasInputGroup'>
            <input
              type='text'
              placeholder='Buscar Imagen'
              onChange={inputChange}
              value={searchValue}
            />
            {searchValue && (
              <button
                className='IdeasButtonDelete'
                onClick={() => setSearchValue("")}>
                <CloseIcon />
              </button>
            )}
          </div>
          <button className='IdeasButtonSearch' onClick={searchData}>
            <ImageSearchSharpIcon />
          </button>
        </div>
      </div>
      <ImageList images={images} />
    </div>
  );
}

export default Ideas;
