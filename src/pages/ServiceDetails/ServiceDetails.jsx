import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  //console.log(service, id);

  const service = services.find((service) => service.id === idInt);
  console.log(service);

  return (
    <div>
      <h3> service Details loading by {service.id}</h3>
      <img src={service.image} alt="" />
      <p> title {service.title}</p>
      <p> Details : {service.details}</p>
      <p> price {service.bookingPrice}</p>
      <p> location {service.eventLocation}</p>
    </div>
  );
};

export default ServiceDetails;
