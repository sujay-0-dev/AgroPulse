import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ session, children }) => {
  const location = useLocation();

  if (!session) {
    // Redirect them to the /auth page, but save the current location they were
    // trying to go to. This allows us to send them back after login.
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;