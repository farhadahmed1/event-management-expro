import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
const FeaturedEvents = ({ event }) => {
  console.log(event);
  const { title, id, data, eventLocation, image, details } = event;
  return (
    <div>
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}

      <div className="card w-96 glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="justify-center flax">
            <FaLocationDot />
            {eventLocation}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
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
