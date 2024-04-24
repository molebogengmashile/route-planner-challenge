import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AvailableRoutes from './pages/AvailableRoutes';
import RouteInformation from './pages/RouteInformation';
import TicketPurchase from './pages/TicketPurchase';
import ConfirmationPage from './pages/ConfirmationPage';
import { TransitProvider } from './context/TransitContext';

function App() {
  return (
    <TransitProvider>
       {/* Router component for navigation */}
      <Router>
        
        <Navbar />
        {/* Routes for different pages */}
        <Routes>

          <Route path="/" element={<AvailableRoutes />} />
          <Route path="/route/:id" element={<RouteInformation />} />

          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/purchase" element={<TicketPurchase />} />
          
        </Routes>
      </Router>
    </TransitProvider>
  );
}

export default App;
