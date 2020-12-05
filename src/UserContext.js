import React, {createContext} from 'react';

const user = {}

fetch('http://localhost:3001/api/user')
  .then(response => response.json())
  .then(data => {
    console
  })
const UserContext = React.createContext(user);
export default UserContext;