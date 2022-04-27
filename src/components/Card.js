import marker from "../images/marker.png";

const Card = ({item}) => {
    return (
        <div className="Card">
            <img className="Card--img" src={item.imageUrl} alt="" />
            <div className="Card--text">
                <div className="Card--text-location">
                    <img src={marker} alt="marker" className="Card--marker" />
                    <p>&nbsp; {item.location.toUpperCase()} &nbsp;
                        <a href={item.googleMapsUrl} target="_blank" className="Card--link">
                            View On Google Maps
                        </a>
                    </p>
                </div>

                <h2 className="Card--text-title">{item.title}</h2>
                <p className="Card--text-date">{item.startDate} - {item.endDate}</p>
                <p className="Card--text-detail">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default Card;