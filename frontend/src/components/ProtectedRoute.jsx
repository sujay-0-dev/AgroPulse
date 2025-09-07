import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ session, children }) => {
  if (!session) {
    // If no user is logged in, redirect them to the auth page
    return <Navigate to="/auth" replace />;
  }
  // If a user is logged in, show the page content
  return children;
};

export default ProtectedRoute;