import "./SelectedMap.css";

function SelectedMap({ selected }) {
  return (
    <div className='SelectedMap'>
      <iframe src={selected.mapLink}></iframe>
    </div>
  );
}

export default SelectedMap;
