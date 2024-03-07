import PropTypes from "prop-types";
import { FaCalendar, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FeaturedEvents = ({ event }) => {
  console.log(event);
  const { title, id, date, eventLocation, image, details } = event;
  return (
    <div>
      <div className="card w-96 h-full glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div>
            <p>
              <FaCalendar /> {date}
            </p>
            <p className="justify-center flax">
              <FaLocationDot />
              {eventLocation}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/service/${id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;

FeaturedEvents.propTypes = {
  event: PropTypes.array.isRequired,
};
