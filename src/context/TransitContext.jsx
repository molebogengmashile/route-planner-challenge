import React, { createContext, useState, useContext } from 'react';

const TransitContext = createContext();

export const TransitProvider = ({ children }) => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  
  const addRouteToCart = (route) => {
    setSelectedRoutes([...selectedRoutes, route]);
  };

  const removeRouteFromCart = (id) => {
    setSelectedRoutes(selectedRoutes.filter(route => route.id !== id));
  };

  const clearSelectedRoutes = () => {
    setSelectedRoutes([]);
  };

  return (
    <TransitContext.Provider
      value={{
        selectedRoutes,
        addRouteToCart,
        removeRouteFromCart,
        clearSelectedRoutes
      }}
    >
      {children}
    </TransitContext.Provider>
  );
};

export const useTransit = () => useContext(TransitContext);