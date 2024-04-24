import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css'

// Confirmation Page component to display confirmation message after purchases
const ConfirmationPage = () => {
  return (
    <div className='Container'>
      <h2> Payment Confirmation</h2>

      <p>Tickets purchased successfully!</p>
      <Link className='back-link' to="/">Back to Home</Link>
    </div>
  );
};

export default ConfirmationPage;