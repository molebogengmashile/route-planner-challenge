import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTransit } from '../context/TransitContext';
import './TicketPurchase.css'


// TicketPurchase component for purchasing tickets


const TicketPurchase = () => {

// Must get the context to manage selected routes
  const { selectedRoutes, removeRouteFromCart, clearSelectedRoutes } = useTransit();
  const navigate = useNavigate();
  

   // Function to handle removal of route from cart
  const handleRemoveFromCart = (id) => {
    removeRouteFromCart(id);
  };

  const handleCheckout = () => {
//set timer for confirmation page
    setTimeout(() => {
      clearSelectedRoutes();
      navigate('/confirmation');
    }, 2000);
  };


  //  Calculate total amount due for checkout
  const totalAmount = selectedRoutes.reduce((total, route) => total + route.price, 0);

  return (
    <div className='Container'>

      {/* Display selecte routes and total amount due */}
      <h2>Ticket Purchase</h2>

      {selectedRoutes.length === 0 ? (
        <p>No tickets selected for purchase</p>
      ) : (
        <>
          <ul>
            {selectedRoutes.map(route => (
              <li key={route.id}>
                {route.name} - R{route.price}
                <button className='remove-btn' onClick={() => handleRemoveFromCart(route.id)}>Remove</button>
              </li>
            ))}
          </ul>


             <p>Total Amount Due: R{totalAmount}</p>

          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}


      <Link className='back-link' to="/">Back</Link>


    </div>
  );
};

export default TicketPurchase;