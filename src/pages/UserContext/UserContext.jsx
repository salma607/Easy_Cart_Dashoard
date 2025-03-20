import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../contexts/UserContext';

export const UserProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <UserContext.Provider value={{ profilePicture, setProfilePicture }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};