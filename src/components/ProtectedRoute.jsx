import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // You can add a loading spinner here if you want
    return <div>Loading...</div>;
  }

  if (!user) {
    // If user is not logged in, redirect them to the homepage
    return <Navigate to="/" replace />;
  }

  // If user is logged in, show the page they were trying to access
  return children;
};

export default ProtectedRoute;