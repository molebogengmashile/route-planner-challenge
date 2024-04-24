import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTransit } from '../context/TransitContext';
import './RouteInformation.css';

// RouteInformation component to display detailed information about the route chosen
const RouteInformation = () => {

    // Get the route ID from the URL parameters//
  const { id } = useParams();

  // Get the context to add route to cart
  const { addRouteToCart } = useTransit();

  //Json Data //
  const routeData = {
    "route-1": {
      "title": "Downtown Express",
      "duration": "25 mins",
      "stops": 5,
      "price": 245.5,
      "description": "The quickest way to the heart of the city, with minimal stops."
    },
    "route-2": {
      "title": "Scenic Coastal Line",
      "duration": "55 mins",
      "stops": 8,
      "price": 255.75,
      "description": "Enjoy breathtaking views of the coastline as you travel."
    },
    "route-3": {
      "title": "Suburban Shuttle",
      "duration": "45 mins",
      "stops": 6,
      "price": 99.0,
      "description": "Connects the suburbs with downtown, running every half hour."
    },
    "route-4": {
      "title": "Night Owl",
      "duration": "30 mins",
      "stops": 4,
      "price": 56.65,
      "description": "Operates after midnight, serving all major nightlife districts."
    }
  };

  const handleAddToCart = () => {
    addRouteToCart({ id, ...routeData[id] });
  };

  return (
    <div className="Container">
      {/* Displaying  rout details */}
      <h2>Route Information</h2>

       <p>Title: {routeData[id].title}</p>
      <p>Duration: {routeData[id].duration}</p>
      <p>Number of Stops: {routeData[id].stops}</p>
      <p>Price: R{routeData[id].price}</p>
      <p>Description: {routeData[id].description}</p>



         <button onClick={handleAddToCart}>Purchase Ticket</button>
      <Link className='back-link' to="/">Back</Link>
    </div>
  );
};

export default RouteInformation;