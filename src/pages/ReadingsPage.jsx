import React from 'react';
import { motion } from 'framer-motion';
import { auth, db } from '../firebase.js';
import { doc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import avatarPlaceholder from '../assets/avatar-placeholder.jpeg';
import './ReadingsPage.css';

const ReadingsPage = ({ user }) => {
  const userDocRef = user ? doc(db, 'users', user.uid) : null;
  const [userData, loading, error] = useDocumentData(userDocRef);

  const handleSignOut = () => {
    auth.signOut();
  };

  // This function now returns the main content or a loading/error message
  const renderContent = () => {
    if (loading) {
      return <p className="page-message">Loading Profile...</p>;
    }
    if (error) {
      return <p className="page-message">Error: {error.message}</p>;
    }
    // Check if the user is loaded AND their data from the database is loaded
    if (user && userData) {
      return (
        <>
          <div className="profile-header">
            <img 
              src={user.photoURL || avatarPlaceholder} 
              alt="Profile" 
              className="profile-avatar"
            />
            <div className="profile-info">
              <h2>{userData.displayName || user.email}</h2>
              <p>Here is a log of your past readings. Each card is a reflection of a moment in your journey.</p>
              <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
            </div>
          </div>

          <div className="readings-log">
            <h3>Your Readings Log</h3>
            <div className="log-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Card Drawn</th>
                    <th>Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.readings && userData.readings.length > 0 ? (
                    userData.readings.slice().reverse().map((reading, index) => (
                      <tr key={index}>
                        <td>{reading.cardName}</td>
                        <td>{reading.timestamp ? new Date(reading.timestamp.seconds * 1000).toLocaleString() : 'Just now'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="empty-log-message">You have no saved readings yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
    // Fallback message if something is not ready
    return <p className="page-message">Initializing user data...</p>;
  };

  return (
    <motion.div 
      className="readings-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {renderContent()}
    </motion.div>
  );
};

export default ReadingsPage;