import React, {createContext} from 'react';
const user = {
    firstName: "John",
    lastName: "Doe",
    localGroup: "Hyvinkään Nummenpojat",
    ageSection: "Explorer",
    positions: []
  }

const UserContext = React.createContext(user);
export default UserContext;