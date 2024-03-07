import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  //console.log(services);
  return (
    <div>
      <h2> Total Number of Services {services.length}</h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ml-4 gap-6 ">
        {services.map((service) => (
          <>
            <div key={service.id}>
              <div className="card w-96 h-full glass">
                <figure>
                  <img src={service.image} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.details}</p>
                  <p className="justify-center flax">
                    <FaLocationDot />
                    {service.eventLocation}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      <Link to={`/service/${service.id}`}>Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <Link to="/service"> Service Details</Link>
    </div>
  );
};

export default Services;
