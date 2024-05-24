import "./DirectionsList.css";
import PlaceIcon from "@mui/icons-material/Place";

function DirectionsList({ directions, selected, onChangeLocal }) {
  return (
    <div className='DirectionsList'>
      {directions.map((direction, index) => (
        <div
          className={selected.name == direction.name ? "selectedLocal" : ""}
          key={index + 1}>
          <button onClick={() => onChangeLocal(direction)}>
            {direction.name}
          </button>
          <p>{direction.direction}</p>
          <a target='_blank' href={direction.directionLink}>
            <PlaceIcon /> Como llegar
          </a>
        </div>
      ))}
    </div>
  );
}

export default DirectionsList;
