import "./InicioCarrucel.css";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function InicioCarrucel() {
  const [carrucel, setCarrucel] = useState(0);

  const prevImg = () => {
    setCarrucel(carrucel == 0 ? 2 : carrucel - 1);
  };
  const nextImg = () => {
    setCarrucel(carrucel == 2 ? 0 : carrucel + 1);
  };

  //   setInterval(() => {
  //     setCarrucel(carrucel == 2 ? 0 : carrucel + 1);
  //   }, 2000);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [carrucel]);

  return (
    <div className='InicioCarrucel'>
      <div className='InicioCarrucelControls'>
        <button onClick={prevImg}>
          <NavigateBeforeIcon />
        </button>
        <button onClick={nextImg}>
          <NavigateNextIcon />
        </button>
      </div>
      <div
        className='InicioCarrucelContainer'
        style={{ transform: `translateX(-${carrucel * 100}%)` }}>
        <div style={{ backgroundImage: `url(${slider1})` }}></div>
        <div style={{ backgroundImage: `url(${slider2})` }}></div>
        <div style={{ backgroundImage: `url(${slider3})` }}></div>
      </div>
    </div>
  );
}

export default InicioCarrucel;
