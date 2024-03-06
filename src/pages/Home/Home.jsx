import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";
import { useState } from "react";

const Home = () => {
  const featuredEvent = useLoaderData();
  const [dataLength, setDataLength] = useState(4);

  // const filterEvents = featuredEvent.filter(1, 4);
  // console.log(filterEvents);
  //console.log(featuredEvent);
  // if (featuredEvent.length > 4) {
  //   const homePageEvent = new FeaturedEvents.filter(1, 4);
  //   return homePageEvent;
  // }
  return (
    <>
      <Banner></Banner>
      <div>
        <div className="text-center">
          <h2 className="text-4xl mt-3 font-bold"> Featured Events</h2>
          <p className="text-xl mt-3"> You can configure featured in backend</p>
          <hr className="w-40 h-0.5 mx-auto mb-10 mt-1 bg-red-500 border-0 rounded  dark:bg-gray-700"></hr>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ml-4 gap-6 ">
          {featuredEvent.slice(0, dataLength).map((event) => (
            <FeaturedEvents key={event.id} event={event} />
          ))}
        </div>
        <div className={dataLength === featuredEvent.length && "hidden"}>
          <button
            onClick={() => setDataLength(featuredEvent.length)}
            className="btn btn-primary"
          >
            More Event
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
