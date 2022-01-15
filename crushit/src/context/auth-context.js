import React from 'react';

export default React.createContext({
   wins: null,
    userId: null,
    login: (userId,wins) => {},
});