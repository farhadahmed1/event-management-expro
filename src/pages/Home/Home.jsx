import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";

const Home = () => {
  const featuredEvent = useLoaderData();
  //console.log(featuredEvent);
  return (
    <>
      <Banner></Banner>
      <div>
        <div className="text-center">
          <h2 className="text-4xl mt-3 font-bold"> Featured Events</h2>
          <p className="text-xl mt-3"> You can configure featured in backend</p>
          <hr className="w-40 h-0.5 mx-auto mb-10 mt-1 bg-red-500 border-0 rounded  dark:bg-gray-700"></hr>
        </div>
        <div className="grid grid-cols-2 m-4">
          {featuredEvent.map((event) =>
            event.length > 4 ? (
              <>
                <FeaturedEvents key={event.id} event={event} />
                <Link to="/moreEvents">More Event</Link>
              </>
            ) : (
              <>
                <FeaturedEvents key={event.id} event={event} />
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
