import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};

export default PrivateRoute;
