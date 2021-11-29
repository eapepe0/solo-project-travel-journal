export default function Card(props) {
  return (
    <div className="card-container">
      <div className="foto">
        <img src={props.image} alt={props.title} className="foto-content"></img>
      </div>
      <div className="card-content">
        <div className="card-info">
          <i className="fas fa-map-marker-alt"></i>
          <span className="location">{props.location}</span>
          <span className="link-maps">
            <a href={props.gmLink}>View on Google Maps</a>
          </span>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-fechas">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
