import { useState } from "react";
import "./Locals.css";
import DirectionsList from "./components/DirectionsList/DirectionsList";
import { directions } from "./constans/directions";
import SelectedMap from "./components/SelectedMap/SelectedMap";

function Locals() {
  const [selectedLocal, setSelectedLocal] = useState(directions[0]);

  return (
    <div className='Locals'>
      <div className='LocalsDirections'>
        <DirectionsList
          directions={directions}
          selected={selectedLocal}
          onChangeLocal={setSelectedLocal}
        />
        <SelectedMap selected={selectedLocal} />
      </div>
    </div>
  );
}

export default Locals;
