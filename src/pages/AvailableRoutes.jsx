import React from 'react';
import { Link } from 'react-router-dom';
import './AvailableRoutes.css';

// AvailableRoutes component to display all available routes
const AvailableRoutes = () => {
    
   {/* JSON data */}
  const routes = [
    {
      "id": "route-1",
      "title": "Downtown Express",
      "duration": "25 mins",
      "stops": 5,
      "price": 245.5,
      "description": "The quickest way to the heart of the city, with minimal stops."
    },
    {
      "id": "route-2",
      "title": "Scenic Coastal Line",
      "duration": "55 mins",
      "stops": 8,
      "price": 255.75,
      "description": "Enjoy breathtaking views of the coastline as you travel."
    },
    {
      "id": "route-3",
      "title": "Suburban Shuttle",
      "duration": "45 mins",
      "stops": 6,
      "price": 99.0,
      "description": "Connects the suburbs with downtown, running every half hour."
    },
    {
      "id": "route-4",
      "title": "Night Owl",
      "duration": "30 mins",
      "stops": 4,
      "price": 56.65,
      "description": "Operates after midnight, serving all major nightlife districts."
    }
  ];

  return (
    <div className="Container">
      <h2>Find your next destination!</h2>
      <h3>Available routes:</h3>
       <ul>
         {/* Mapping through each route and create a list item for each */}
        {routes.map(route => (
          <li key={route.id}>


             {/* Must link to the Route Information page with route ID in the URL */}
            <Link to={`/route/${route.id}`}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableRoutes;